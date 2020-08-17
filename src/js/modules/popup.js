(function() {
  "use strict";

  var TITLE_RATING = "Повысить рейтинг";
  var TITLE_WALLET = "Мой кошелек";
  var ESC_KEYCODE = 27;

  var linkPurse = document.querySelector(".header__purse");
  var link2Purse = document.querySelector(".addvoices");
  var popupPurse = document.querySelector(".popup-purse");
  var linkHelp = document.querySelector(".rating-page__hint");
  var popupHelp = document.querySelector(".popup-help");
  var linkUpProfile = document.querySelector(".up_profile_popup");
  //var popupUpProfile = document.querySelector(".popup-up-profile");
  var linkFlower = document.querySelector(".flower__help");
  var linkSuccess = document.querySelector(".profile-title__button");
  var popupSuccess = document.querySelector(".popup-success");
  var popupFlower = document.querySelector(".popup-flower");
  var linksGift = document.querySelectorAll(".winners__item-link");
  var popupGift = document.querySelector(".popup-gift");
  var link3Purse = document.querySelector(".profile-main__increase-rating");
  var link4Purse = document.querySelector(".profile__increase-rating");
  var link5Purse = document.querySelector(".user-card__up-rating");
  var linksGift2 = document.querySelectorAll(".user-card__vote");
  var popupGift2 = document.querySelector(".popup-gift2");
  //var link6Purse = document.querySelector(".buttongol");
  //var popupRating = document.querySelector(".popup-rating");
  var popapRatingCheckboxElement = document.querySelector(
    ".popup-purse__footer input.popup-rating__check"
  );
  /*   var popupRatingClose = document.querySelector(".popup-rating__close");
   */
  var showPopup = function(link, popup, title) {
    var closePopup = function() {
      document.removeEventListener("keydown", onPopupEscapePress);
      popup.classList.remove("popup-show");
      document.body.style.overflow = "visible";
    };

    var onPopupEscapePress = function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    };

    link.addEventListener("click", function(evt) {
      evt.preventDefault();

      if (title) {
        popup.querySelector(
          ".popup-purse__nav-item--active"
        ).textContent = title;
      }

      popup.classList.add("popup-show");
      document.body.style.overflow = "hidden";
      var close = popup.querySelector("button");
      var popupRatingClose = document.querySelector(".popup-rating__close");

      if (link.classList.contains("winners__item-link")) {
        var winName = link.getAttribute("data-name");
        var winNameSpan = popup.querySelector(".popup-gift__desc-name");
        winNameSpan.textContent = winName;
      }

      close.addEventListener("click", function(evt) {
        evt.preventDefault();
        closePopup();
      });

      popupRatingClose.addEventListener("click", function(evt) {
        evt.preventDefault();

        closePopup();
      });
      document.addEventListener("mouseup", function(evt) {
        if (evt.target === popup && popup.classList.contains(`popup-show`)) {
          closePopup();
        }
      });

      document.addEventListener("keydown", onPopupEscapePress);
    });
  };

  if (linkPurse) {
    showPopup(linkPurse, popupPurse, TITLE_WALLET);
  }

  if (linkUpProfile) {
    //showPopup(linkUpProfile, popupUpProfile);
    showPopup(linkUpProfile, popupPurse, TITLE_WALLET);
  }

  if (linkHelp) {
    showPopup(linkHelp, popupHelp);
  }

  if (link2Purse) {
    showPopup(link2Purse, popupPurse, TITLE_RATING);
  }

  if (link3Purse) {
    showPopup(link3Purse, popupPurse, TITLE_RATING);
  }

  if (link4Purse) {
    showPopup(link4Purse, popupPurse, TITLE_RATING);
  }

  if (link5Purse) {
    showPopup(link5Purse, popupPurse, TITLE_WALLET);
  }

 /*  if (link5Purse) {
    showPopup(link5Purse, popupRating);
  } */

  if (linkFlower) {
    showPopup(linkFlower, popupFlower);
  }

  if (linkSuccess) {
    showPopup(linkSuccess, popupSuccess);
  }

  if (linksGift.length > 0) {
    for (var i = 0; i < linksGift.length; i++) {
      showPopup(linksGift[i], popupGift);
    }
  }

  if (linksGift2.length > 0) {
    for (var j = 0; j < linksGift2.length; j++) {
      showPopup(linksGift2[j], popupGift2);
    }
  }
  if (popapRatingCheckboxElement) {
    popapRatingCheckboxElement.addEventListener("change", function() {
      var submitBtnElement = document.querySelector(
        ".popup-rating__form-submit"
      );
      var popupRatingInput = document.querySelector(
        ".popup-rating__form-label"
      );

      var popupRatingFormInput = document.querySelector(
        ".popup-rating__form-input"
      );

      if (popapRatingCheckboxElement.checked) {
        submitBtnElement.disabled = false;
        //popupRatingInput.disabled = false;
        popupRatingInput.classList.remove("disabled-auto");
        popupRatingFormInput.disabled = false;
      } else {
        submitBtnElement.disabled = true;
        //popupRatingInput.disabled = true;
        popupRatingInput.classList.add("disabled-auto");
        popupRatingFormInput.disabled = true;
      }
    });
  }
})();
