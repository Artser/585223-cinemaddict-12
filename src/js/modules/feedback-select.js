;
(function () {
'use strict';

function CustomSelect(options) {
    var elem = options.elem;

    elem.onclick = function(event) {
      if (event.target.classList.contains('feedback-form__choice')) {
        toggle();
      } else if (event.target.classList.contains('feedback-form__item')) {
        var activeItem = elem.querySelector('.feedback-form__item--active');

        if (activeItem) {
            activeItem.classList.remove('feedback-form__item--active');
        };
        if (!event.target.classList.contains('feedback-form__item--active')) {
            event.target.classList.add('feedback-form__item--active');
        }
        setValue(event.target.innerHTML, event.target.dataset.value);
        close();
      }
    };

    elem.onkeydown = function(event) {
      if (event.keyCode === 13) {
        if (event.target.classList.contains('feedback-form__choice')) {
          toggle();
        }
        else if (event.target.classList.contains('feedback-form__select')) {
          toggle();
        }else if (event.target.classList.contains('feedback-form__item')) {
          var activeItem = elem.querySelector('.feedback-form__item--active');

          if (activeItem) {
              activeItem.classList.remove('feedback-form__item--active');
          };
          if (!event.target.classList.contains('feedback-form__item--active')) {
              event.target.classList.add('feedback-form__item--active');
          }
          setValue(event.target.innerHTML, event.target.dataset.value);
          close();
        }
      }
    };

    var isOpen = false;

    function onDocumentClick(event) {
      if (!elem.contains(event.target)) close();
    }

    function setValue(title, value) {
      if (!elem.classList.contains('feedback-form__select--selected')) {
        elem.classList.add('feedback-form__select--selected');
      }

      var selectInput = elem.querySelector('select');

      if (selectInput) {
          selectInput.value = title;
      }

      elem.querySelector('.feedback-form__choice').innerHTML = title;

      var widgetEvent = new CustomEvent('select', {
        bubbles: true,
        detail: {
          title: title,
          value: value
        }
      });

      elem.dispatchEvent(widgetEvent);

    }

    function toggle() {
      if (isOpen) close();
      else open();
    }

    function open() {

      elem.classList.add('feedback-form__select--open');
      document.addEventListener('click', onDocumentClick);
      document.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          onDocumentClick(e);
        }
      });
      isOpen = true;
    }

    function close() {
      elem.classList.remove('feedback-form__select--open');
      document.removeEventListener('click', onDocumentClick);
      isOpen = false;
    }

  }

  var newElem = document.querySelector('.feedback-form__select');

  if (newElem) {
    var animalSelect = new CustomSelect({
      elem: newElem
    });
  }
})();
