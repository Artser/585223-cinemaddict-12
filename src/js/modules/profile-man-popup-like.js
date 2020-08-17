;
(function () {
'use strict';

var link = document.querySelector(".profile-main__like--heart");

if (link) {
  var popup = document.querySelector(".profile-man__popup-settings-fill");
  var close = popup.querySelector(".profile-man__popup-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("profile-man__popup--close");
    popup.classList.add("profile-man__popup--show");
  });
  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("profile-man__popup--show");
      popup.classList.add("profile-man__popup--close");
  });
}
})();
