"use strict";

(function() {
  let chatBlock = document.querySelector(".blog-item__chat");
  let chatBtn = document.querySelector(".blog-item__comment-add");

  if (chatBlock && chatBtn) {
    chatBtn.addEventListener("click", function() {
      chatBtn.classList.add("hide");
      chatBlock.classList.add("active");
    });
  }

  let shareLink = document.querySelector(".blog-item__share");

  if (shareLink) {
    shareLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      this.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 30000 30000" xml:space="preserve">\n' +
        '  <path d="M29754 6896l-2622-2636-16310 16221-7941-7984-2637 2622 7942 7985 2622 2637 2638-2623z"/>\n' +
        "</svg>Скопировано";
      navigator.clipboard.writeText(document.location.href);
    });
  }

  //Попап просмотра фото
  var closePopupEdit = function () {
    $(".photo-edit__gallery-popup").removeClass("photo-edit__popup--show");
    window.document.documentElement.style.overflow = "";

    window.removeEventListener('keyup', onEscPress);
  };

  var onEscPress = function() {
    closePopupEdit();
  };

  $(document).on("click", ".blog-item__gallery-img-wrap", function() {
    $(".photo-edit__gallery-popup").addClass("photo-edit__popup--show");
    $(".photo-edit__gallery-popup").removeClass("photo-edit__popup--close");

    window.document.documentElement.style.overflow = "hidden";

    window.addEventListener('keyup', onEscPress);

    var popupElement = document.querySelector('.photo-edit__popup');
    popupElement.addEventListener('click', function (evt) {
      if (evt.target === popupElement) {
        closePopupEdit();
      }
    });
  });

  $(document).on("click", ".photo-edit__close", function() {
    closePopupEdit();
  });

  $(document).on("click", ".blog-item__main-img", function() {
    $(".photo-edit__main-popup").addClass("photo-edit__popup--show");
  });

  $(document).on("click", ".photo-edit__close", function() {
    $(".photo-edit__main-popup").removeClass("photo-edit__popup--show");
  });
})();
