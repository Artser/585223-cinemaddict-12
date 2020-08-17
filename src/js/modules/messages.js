'use strict';

(function () {
  $('.chat__settings h3').on('click', function () {
    $('.chat__settings').toggleClass('chat__settings--open');
    $(document).mouseup(function (e){
      if ($('.chat__settings').hasClass('chat__settings--open')) {
        var chatList = $('.chat__settings-list');
        var chatSettings = $('.chat__settings h3');
        if (!chatSettings.is(e.target) && !chatList.is(e.target) && chatList.has(e.target).length === 0) {
          $('.chat__settings').removeClass('chat__settings--open');
        }
      }
    });
  });


  $('.chat__list-message .chat__item').each(function() {
    $(this).on('click', function () {
      $(this).find('.chat__item-btns').toggleClass('chat__item-btns--hide');;
    });
  });


  $(document).on('click', ".chat__form-smiles span", function () {
    $(".chat__smiles-list--emoji").show();
    $(".chat__smiles-list--stikers").hide();
    $(".chat__smiles-title-emoji").addClass('title-active');
    $(".chat__smiles-title-stikers").removeClass('title-active');

    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.chat__form-bottom').append( $('.chat__smiles') );
      $(".chat__form-last-smiles").toggle();
      $(".chat__smiles").toggle();
      $(".chat__list").css('height', 'calc(100vh - 454px)');

      if ($(".chat__smiles").is(':hidden')) {
        $(".chat__list").css('height', 'calc(100vh - 303px)');
      }

      $(document).mouseup(function (e){
        var chatSmiles = $('.chat__smiles');
        var chatSpan = $('.chat__form-smiles span');
        if (!chatSpan.is(e.target) && !chatSmiles.is(e.target) && chatSmiles.has(e.target).length === 0) {
          $(".chat__form-last-smiles").show();
          $(".chat__smiles").hide();
          $(".chat__list").css('height', 'calc(100vh - 303px)');
        }
      });
    } else {
      $(".chat__smiles").toggle(200);
      $(document).mouseup(function (e){
        var chatSmiles = $('.chat__smiles');
        var chatSpan = $('.chat__form-smiles span');
        if (!chatSpan.is(e.target) && !chatSmiles.is(e.target) && chatSmiles.has(e.target).length === 0) {
          $(".chat__smiles").hide();
        }
      });
    }
  });

  $(document).on('click', ".chat__smiles-title-emoji", function () {
    $(".chat__smiles-list--emoji").show();
    $(".chat__smiles-list--stikers").hide();
    $(".chat__smiles-title-emoji").addClass('title-active');
    $(".chat__smiles-title-stikers").removeClass('title-active');

  });

  $(document).on('click', ".chat__smiles-title-stikers", function () {
    $(".chat__smiles-list--emoji").hide();
    $(".chat__smiles-list--stikers").show();
    $(".chat__smiles-title-stikers").addClass('title-active');
    $(".chat__smiles-title-emoji").removeClass('title-active');
  });

  $('.chat__form-last-smiles li img, .chat__smiles-list li img').on('click', function () {

    $(".chat__form-textarea").append($(this).clone().attr('contentEditable', 'false'));
    $(".photo-profile__textarea").append($(this).clone().attr('contentEditable', 'false'));
    var textarea = document.querySelector('.chat__form-textarea');
    var textareaPhoto = document.querySelector('.photo-profile__textarea');
    if (textarea) {
      setEndOfContenteditable(textarea);
    }
   if (textareaPhoto) {
    setEndOfContenteditable(textareaPhoto);
   }
   //Скрытие окна при клике на смайл
   $(".chat__smiles").hide();
  });

if (window.matchMedia('(max-width: 768px)').matches) {
  $('.chat__form-textarea').on('keydown', function (evt) {
    if (evt.target.scrollHeight > 50) {
      $('.chat__form-textarea').css('height', '123px');

      if (evt.keyCode === 8) {
        if (evt.target.scrollHeight < 120) {
          $('.chat__form-textarea').css('height', 'auto');
        }
      }
    }
  })
}

  $(document).on('click', ".addToBL", function () {
    $.ajax({
        url: "/chat/addToBL",
        type: "post",
        dataType: "text",
        data: {user_id: $(this).data('user'), _token: window.Laravel['csrfToken']},
        success: function (ans) {
            window.location = '/chats/black_list'
        }
    });
    return false;
  });

  $(document).on('click', ".addToFav", function () {
      $.ajax({
          url: "/chat/addToFav",
          type: "post",
          dataType: "text",
          data: {message: $(this).data('message'), _token: window.Laravel['csrfToken']},
          success: function (ans) {
              window.location = '/chats/favorites_list';
          }
      });
      return false;
  });
  $(document).on('click', ".removeFromBL", function () {
      var $this = $(this);
      $.ajax({
          url: "/chat/removeFromBL",
          type: "post",
          dataType: "text",
          data: {user_id: $(this).data('user'), _token: window.Laravel['csrfToken']},
          success: function (ans) {
              if ($this.data('user') == 0) {
                  $('.chat__black-list .chat__item').remove();
                  $(".chat__title a span").text(0);
              } else {
                  $this.parents('..chat__black-list .chat__item').remove();
                  $(".chat__title a span").text(parseInt($(".chat__title a span").text()) - 1);
              }
          }
      });
      return false;
  });

  $(document).on('click', ".removeFromFav", function () {
      var $this = $(this);
      $.ajax({
          url: "/chat/removeFromFav",
          type: "post",
          dataType: "text",
          data: {fav_id: $(this).data('favorite'), _token: window.Laravel['csrfToken']},
          success: function (ans) {
              if ($this.data('favorite') == 0) {
                  $('.chat__list-fav .chat__item').remove();
                  $(".chat__title a span").text(0);
              } else {
                  $this.parents('.chat__list-fav .chat__item').remove();
                  $(".chat__title a span").text(parseInt($(".chat__title a span").text()) - 1);
              }
          }
      });
      return false;
  });


  $(document).on('change', "#chat-sound", function () {
    var value = window.sound ? 0 : 1;
    $.ajax({
        url: "/chat/changeNotification",
        type: "post",
        dataType: "text",
        data: {value: value, field: 'sound', _token: window.Laravel['csrfToken']},
        success: function (ans) {
            window.sound = value;
        }
    });
    return false;
  });

  $(document).on('change', "#chat-push", function () {
    var value = window.pushes ? 0 : 1;
    $.ajax({
        url: "/chat/changeNotification",
        type: "post",
        dataType: "text",
        data: {value: value, field: 'push', _token: window.Laravel['csrfToken']},
        success: function (ans) {
            window.pushes = value;
        }
    });
    return false;
  });

  $(document).on('change', "#chat-mail", function () {
    var value = window.mail ? 0 : 1;
    $.ajax({
        url: "/chat/changeNotification",
        type: "post",
        dataType: "text",
        data: {value: value, field: 'mail', _token: window.Laravel['csrfToken']},
        success: function (ans) {
            window.mail = value;
        }
    });
    return false;
  });

  function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if (document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
  }

  // открытие картинки из чата

 /*  function positionPopup(popupClass) {
    var heightPopup = $('.message-pic-popup__wrap').height() / 2;
    if (typeof popupClass !== "undefined") {
        heightPopup = $('.' + popupClass + ' .message-pic-popup__wrap').height() / 2;
    }
    var marginTop = $(window).height() / 2 - heightPopup;
    if (marginTop < 0) marginTop = 50;
    $('.message-pic-popup__wrap').last().css('margin-top', marginTop);
  } */

  $(function () {
    $('.chat__item-pic').on('click', function (evt) {
        evt.stopPropagation();

        $('.crop_img').attr('src', $(this).attr('src'));
        $('.message-pic-popup').fadeIn();
        positionPopup('message-pic-popup');
        $('.message-pic-popup__close').on('click', function () {
          $('.message-pic-popup').fadeOut();
        });

        let popup = document.querySelector('.message-pic-popup');
        document.addEventListener('mouseup', function (evt) {
          if (evt.target === popup) {
            $('.message-pic-popup').fadeOut();
          }
        });
    });
  })

  window.addEventListener('resize', function () {
    positionPopup('message-pic-popup');
  });


})();






