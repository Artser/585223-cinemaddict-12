'use strict';

(function () {
    var $iconShare = $(".icon-share-popup");
    var $iconOk = $(".icon-ok-popup");
    $iconOk.hide();
    $(document).on('click', '.icon-share-popup', function() {
        $iconShare.hide();
        $iconOk.show();
    });

    //Кнопка мне нравится
    $(document).on('click', '.addLike', function() {
      if ($('.photo-edit__popup-like').hasClass('photo-edit__popup-like--active')) {
        $('.photo-edit__popup-like').removeClass('photo-edit__popup-like--active');
      } else {
        $('.photo-edit__popup-like').addClass('photo-edit__popup-like--active');
      }
    });

})();
