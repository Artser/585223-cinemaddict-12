'use strict';

(function () {
  let input = document.querySelector('.chosen-search-input')
  console.log(input)
  $(".chzn-select").chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    max_selected_options: 5,
    no_results_text: 'Нет в списке',
    width: '100%'
  });

  $('.chzn-select-multi').chosen({
    enable_split_word_search: true,
    inherit_select_classes: true,
    max_selected_options: 5,
    no_results_text: 'Нет в списке',
    width: '100%'
  });

  /** Show/hide password
     * in auth block & settings page
     * */

    /** Show icon when start typing password */
  $('.settings__input--password').keyup(function () {
    var parentOfInput = $(this).parent(".settings__input-password");
    var field = parentOfInput.find("input");
    if (field.attr('type') === 'password') {
      parentOfInput.children('.settings__password-icon--show').show();
    } else {
      parentOfInput.children('.settings__password-icon--hide').show();
    }
  });

  /** Toggle icon in input with password */
  $(".settings__input-password .settings__password-icon--show, .settings__input-password .settings__password-icon--hide").unbind('click').click(function () {
    var parent = $(this).closest(".settings__input-password");
    var field = parent.find("input");
    var showButton = parent.find(".settings__password-icon--show");
    var hideButton = parent.find(".settings__password-icon--hide");

    if (field.attr('type') === 'password') {
        showButton.hide();
        hideButton.show();
        field.attr('type', 'text');
    } else {
        showButton.show();
        hideButton.hide();
        field.attr('type', 'password');
    }
  });

  /** Hide icon when input field is empty */
  $('.settings__input-password').blur(function () {
      if ($(this).val().length === 0) {
          $(this).next('.settings__password-icon--show, .settings__password-icon--hide').hide();
      }
  });
})();
