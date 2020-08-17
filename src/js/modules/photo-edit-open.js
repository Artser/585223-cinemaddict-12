(function() {
  "use strict";

  var link = document.querySelector(".photo-profile__photo-item");
  var popup = document.querySelector(".photo-edit__popup");
  var popupTwo = document.querySelector(".photo-edit__popup--gr");
  var close = document.querySelector(".photo-edit__close");
  //var closeTwo = document.querySelector(".photo-edit__close");

  //Изменение размера блока
  function resizeBlock(block, height) {
    block.height(height);
  }

  if (close) {
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("photo-edit__popup--show");
      popup.classList.add("photo-edit__popup--close");

      $("body").css("overflow", "visible");
      // bodyScrollLock.enableBodyScroll(document.querySelector('body'));
    });
  }

  $(document).on("click", ".photo-profile__photo-item", function(e) {
    e.preventDefault();
    popup.classList.remove("photo-edit__popup--close");
    popup.classList.add("photo-edit__popup--show");

    if ($(window).width() > 1024) {
      resizeBlock(
        $(".photo-edit__row--gallery"),
        $(".photo-edit__popup-pic img").height()
      );
    } else {
      resizeBlock($(".photo-edit__row--gallery"), "auto");
    }
    $("body").css("overflow", "hidden");
    // bodyScrollLock.disableBodyScroll(document.querySelector('body'));
  });

 /*  if (closeTwo) {
    closeTwo.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupTwo.classList.remove("photo-edit__popup--show");
      popupTwo.classList.add("photo-edit__popup--close");

      $("body").css("overflow", "visible");
      // bodyScrollLock.enableBodyScroll(document.querySelector('body'));
    });
  } */

  $(document).on("click", ".photo-profile__photo-item-gr", function(e) {
    e.preventDefault();
    console.log("ok");
    popupTwo.classList.remove("photo-edit__popup--close");
    popupTwo.classList.add("photo-edit__popup--show");

    $("body").css("overflow", "hidden");
    // bodyScrollLock.disableBodyScroll(document.querySelector('body'));

    if ($(window).width() > 1024) {
      resizeBlock(
        $(".photo-edit__row--gallery"),
        $(".photo-edit__popup-pic--gr img").height()
      );
    } else {
      resizeBlock($(".photo-edit__row--gallery"), "auto");
    }
  });
})();
