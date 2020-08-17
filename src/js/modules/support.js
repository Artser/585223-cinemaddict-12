'use strict';

(function() {
  initSearch();

  function initSearch() {
    let container = document.querySelector('.support__search-form');
    if (container) {
      let input = container.querySelector('.support__search-input');
      let hints = container.querySelectorAll('.support__search-hint-link');

      input.addEventListener('input', function() {
        let isHint = false;

        if (input.value.length > 2) {
          hints.forEach(function(hint) {
            if (hint.textContent.indexOf(input.value) !== -1) {
              hint.classList.add('active');
              isHint = true;
            } else {
              hint.classList.remove('active');
            }
          });
        } else {
          hints.forEach(function(hint) {
            hint.classList.remove('active');
          });
        }

        container.classList.toggle('active', isHint);
      });
    }
  }
})();
