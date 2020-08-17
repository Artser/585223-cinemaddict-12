;
(function () {
'use strict';

var popup = document.querySelector(".profile-name-tooltip");
$('.profile-name-help').each(function() {
    $(this).hover(function (evt) {
        evt.preventDefault();
        popup.classList.toggle("profile-name-tooltip--show");
    })});
    
})();
