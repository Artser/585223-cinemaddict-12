;
(function () {
'use strict';

$('.friends__button-reset').click(function(){
  $('.select-hashtag-choose').val('').trigger('chosen:updated');
  $('.select-single--participants').val('').trigger('chosen:updated');
  $('.select-single--town').val('').trigger('chosen:updated');
  $('.select-single--to').val('').trigger('chosen:updated');
  $('.select-single--from').val('').trigger('chosen:updated');
  $('.search__filter-status input').val('').trigger('chosen:updated');
  });
})();