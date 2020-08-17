$(document).on('click', '.add-content__photo-name-info-turn', function () {
  var rotatePhoto = $(this).parents('.add-content__photo-name-block').find('.add-content__photo-name-photo img');

  var angle_photo = parseInt(rotatePhoto.attr('data-angle'));
  var postAngle = 0;
  if ($(this).hasClass('left')) {
      angle_photo -= 90;
      postAngle = 90;
      rotate();
  } else {
      angle_photo += 90;
      postAngle = -90;
      rotate();
  }

  function rotate ()  {
         if (angle_photo % 180 != 0) {

              var picHeight = rotatePhoto.outerHeight();
              if (picHeight > rotatePhoto.outerWidth()) {
                  var heightCoeff = picHeight / 182;

                  var picWidth = rotatePhoto.outerWidth() / heightCoeff;

                  rotatePhoto.css({
                      'maxWidth': picWidth + 'px',
                      'maxHeight': '182px',
                      'position': 'relative',
                      'left': (182 - parseInt(picWidth)) / 2 + 'px',
                      'transform': 'rotate(' + angle_photo + 'deg)'
                  });
              } else {
                  var containerHeight = rotatePhoto.parent().outerHeight();

                  rotatePhoto.parent().css('height', '183px');

                  rotatePhoto.css({
                      'position': 'relative',
                      'top': (183 - parseInt(containerHeight)) / 2 + 'px',
                      'transform': 'rotate(' + angle_photo + 'deg)'
                  });
              }
          } else {
              rotatePhoto.removeAttr('style');
              rotatePhoto.parent().removeAttr('style');
              rotatePhoto.css({
                  'transform': 'rotate(' + angle_photo + 'deg)'
              });
          }
          rotatePhoto.attr('data-angle', angle_photo);

        }

});

// //Поворот картинки в окне просмотра
// function renderRotation(angle_photo, $this) {
//   var picWidth = $('.photo-edit__popup-content>.photo-edit__popup-pic>img').outerWidth();
//   var picHeight = $('.photo-edit__popup-content>.photo-edit__popup-pic>img').outerHeight();
//   if (angle_photo % 180 != 0) {
//        if ($(document).width() < '1024') {
//         $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': 'auto', 'height': 'auto', 'maxWidth': '550px', 'maxHeight': '600px'});
//       } else {
//         $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': picWidth + 'px', 'height': picHeight + 'px', 'maxWidth': '100%', 'maxHeight': '100%'});
//       }
//      $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css({'maxWidth': picHeight + 'px', 'maxHeight': picWidth + 'px'});
//   } else {
//     if ($(document).width() < '1024') {
//       $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': 'auto', 'height': 'auto', 'maxWidth': '550px', 'maxHeight': '600px'});
//     } else {
//       $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': picWidth + 'px', 'height': picHeight + 'px', 'maxWidth': '100%', 'maxHeight': '100%'});
//     }
//       // $('.photo-edit__popup-contentt>.photo-edit__popup-pic').css({'width': 'auto', 'height': 'auto'});
//       $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css({'maxWidth': '100%', 'maxHeight': '100%'});
//   }
//   $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css('transform', 'rotate(' + angle_photo + 'deg)');
//   var thumbId = $this.parents('.photo-edit__gallery-wrap').find('.addLike').attr('data-id');
//   $('.photo-profile__photo [data-id="' + thumbId + '"]').prev().css('transform', 'rotate(' + angle_photo + 'deg)');

//   return thumbId;
// }

function renderRotation(angle_photo, $this) {
  var picWidth = $('.photo-edit__popup-content>.photo-edit__popup-pic>img').outerWidth();
  var picHeight = $('.photo-edit__popup-content>.photo-edit__popup-pic>img').outerHeight();
  if (angle_photo % 180 != 0) {
      $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': picWidth + 'px', 'height': picHeight + 'px'});
      $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css({'maxWidth': picHeight + 'px', 'maxHeight': picWidth + 'px'});
  } else {
      $('.photo-edit__popup-content>.photo-edit__popup-pic').css({'width': 'auto', 'height': 'auto'});
      $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css({'maxWidth': '100%', 'maxHeight': '100%'});
  }
  $('.photo-edit__popup-content>.photo-edit__popup-pic>img').css('transform', 'rotate(' + angle_photo + 'deg)');
  var thumbId = $this.parents('.photo-edit__gallery-wrap').find('.addLike').attr('data-id');
  $('.photo-profile__photo [data-id="' + thumbId + '"]').prev().css('transform', 'rotate(' + angle_photo + 'deg)');

  return thumbId;
}

var postAngle = 0;
var angle_photo = 0;
$(document).on('click', '.photo-edit__popup-content-rotation .photo-edit__popup-content-rotation-buttons a', (function (e) {
    e.preventDefault();
    // adaptPopup();
    if ($(this).hasClass('minus')) {
        angle_photo = parseInt(angle_photo) - 90;
        postAngle = 90;
    } else {
        angle_photo = parseInt(angle_photo) + 90;
        postAngle = -90;
    }
//с белыми полями
    var thumbId = renderRotation(angle_photo, $(this));
    $('.photo-profile__photo [data-id="' + thumbId + '"]').attr('data-transform', angle_photo);
  }));
