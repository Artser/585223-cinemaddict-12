'use strick';

(function () {
  $('.chosen-container-single--custom').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    no_results_text: 'Нет в списке',
    disable_search: true,
    width: '100%'
  });

  $('.friends__select-interests').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    max_selected_options: 5,
    no_results_text: 'Нет в списке',
    width: '100%'
  });

  $('.friends__button-reset').click(function(){
    $('.chosen-container-single--custom').val('').trigger('chosen:updated');
    $('.friends__select-interests').val('').trigger('chosen:updated');
  });






  let btn = document.querySelector('.friends__button-filter');

  if (btn) {
    let sidebar = document.querySelector('.friends__sidebar');

    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      sidebar.classList.toggle('active');
    });
  }
})();
