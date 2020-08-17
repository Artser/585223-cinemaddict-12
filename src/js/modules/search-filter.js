;
(function () {
  'use strict';

  $('#tagBox').tagging();
  $('#tagBoxMobile').tagging();

  $('.type-zone').attr('placeholder', 'Хештеги');

  $('.type-zone').on('keydown', function () {
    if ($('.tag').length > 0) {
      $('.type-zone').removeAttr('placeholder');

    } else if ($('.tag').length === 0) {
      $('.type-zone').attr('placeholder', 'Хештеги');

    }
  })

  $('.select-single').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    no_results_text: "Нет в списке",
    width: "100%"
  });

  $('[name="age1"]').change(function () {
    $('[name="age2"] option').removeAttr('disabled');
    $('[name="age2"] option[value="' + $(this).val() + '"]').prevAll().attr('disabled', 'disabled');
    $('[name="age2"]').trigger('chosen:updated');

    if ($('[name="age2"]').val() === null) {
      $('[name="age2"]').val('').trigger('chosen:updated');
      $('[name="age2"] option[value="' + $(this).val() + '"]').prevAll().attr('disabled', 'disabled');
    }
  });

  $('.select-multi').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    max_selected_options: 5,
    no_results_text: "Нет в списке",
    width: "100%"
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.search__filter h3').on('click', function () {
      $('.search__filter-wrap').slideToggle();
      $('.search__filter').toggleClass('search__filter--open');
    });

    $('.search__filter button').on('click', function (evt) {
      evt.preventDefault();
      $('.search__filter-wrap').slideToggle();
      $('.search__filter').toggleClass('search__filter--open');
    });
  }

  $('.search__button-reset').click(function(){
    $('.select-single--type-post').val('').trigger('chosen:updated');
    $('.search__place input').val('').trigger('chosen:updated');
    $('.select-single--period').val('').trigger('chosen:updated');

    $('.search__tag').tagging( "removeAll" );
    $('.type-zone').attr('placeholder', 'Хештеги');
  });




})();
