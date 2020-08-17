;
(function () {
'use strict';

var link = document.querySelectorAll(".invite_friend_popup");
var popup = document.querySelector(".popup-bg-invite");
var close = document.querySelector(".popup-close-invite");

if (link.length > 0) {
  link.forEach(function (el) { (el.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-bg-invite--close");
    popup.classList.add("popup-bg-invite--show");
}))});

if (close) {
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-bg-invite--show");
    popup.classList.add("popup-bg-invite--close");
});
}
}

var linkHint = document.querySelector(".invite_friend_tip_popup");
var popupHint = document.querySelector(".popup-bg-hint");
if (popupHint) {
    var closeHint = popupHint.querySelector(".popup-close");
}

if (linkHint) {
    linkHint.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupHint.classList.remove("popup-bg-hint--close");
        popupHint.classList.add("popup-bg-hint--show");
    });
}
if (closeHint) {
    closeHint.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupHint.classList.remove("popup-bg-hint--show");
        popupHint.classList.add("popup-bg-hint--close");
    });
}
})();
