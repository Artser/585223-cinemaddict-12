;
(function () {
'use strict';

var link = document.querySelector(".popup-comment-smile-open-block");
var popup = document.querySelector(".messenger__form-smiles");
var close = document.querySelector(".messenger__form-smiles-place");

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains('messenger__popup--close')) {
      popup.classList.remove("messenger__popup--close");
      popup.classList.add("messenger__popup--show");
    } else {
      popup.classList.remove("messenger__popup--show");
      popup.classList.add("messenger__popup--close");
    }
});
}

//Клик на стикеры
$(document).on('click', '.messenger__form-smiles-place-block-main', function (e) {
  var smile = $(this).clone().addClass('messenger__form-smiles-place-block-main--textarea');
  $('.photo-profile__textarea').append(smile);
});
})();
