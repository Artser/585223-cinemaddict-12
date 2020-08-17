;
(function () {
'use strict';

var $addLink = $('.add-content__video-input-youtube');
var $addFile = $('.add-content__video-input-file');

$(document).on('click', '.add-content__video-input-fild-change-button', function() {
  if ($addFile.hasClass('active')) {
    $addLink.addClass('active');
    $addFile.removeClass('active');
  } else if ($addLink.hasClass('active')) {
    $addLink.removeClass('active');
    $addFile.addClass('active');
  }
});
})();
