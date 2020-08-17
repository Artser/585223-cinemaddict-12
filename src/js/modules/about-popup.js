;
(function () {
'use strict';

var link = document.querySelector(".about__help-button");
var popup = document.querySelector(".about__popup");
var close = document.querySelector(".about__popup-close");

if (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("about__popup--close");
        popup.classList.add("about__popup--show");
    });
    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("about__popup--show");
        popup.classList.add("about__popup--close");
    });    
}
})();
