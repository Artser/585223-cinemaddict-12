;
(function () {

  'use strict';

  const modal = document.querySelector('.modal');
  const modalHelp = document.querySelector('#modalHelp');
  const modalRegister = document.querySelector('#modalSuccessRegister');
  const help = document.querySelector('.help-button');
  const close = document.querySelector('.modal__close');
  const ESC = 27;

  if (modalRegister) {
    const modalButtonRegister = modalRegister.querySelector('#ModalRegisterButton');

    modalButtonRegister.addEventListener('click', function() {
      modalRegister.classList.remove('modal--show');
      removeEventListeners();
    });
  }


  // открытие модального окна с сообщением

  function modalShow(modal) {
    modal.classList.add('modal--show');
    const button = modal.querySelector('.modal__button');
    const close = modal.querySelector('.modal__close');
    addEventListeners();

    function onModalButtonClick() {
      modal.classList.remove('modal--show');
      removeEventListeners();

      if (button) {
        button.addEventListener('click', onModalButtonClick);
      }

    }
    close.addEventListener('click', onModalButtonClick);
  }

  function addEventListeners() {
    document.addEventListener('keydown', closeModalOnEsc);
    document.addEventListener('click', closeModalOnClick);
    close.addEventListener('click', onCloseModalClick);
  }

  function removeEventListeners() {
    document.removeEventListener('keydown', closeModalOnEsc);
    document.removeEventListener('click', closeModalOnClick);
    close.removeEventListener('click', onCloseModalClick);
  }

  function onCloseModalClick(evt) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
  }

  function onButtonClick(modal) {
    const isOpen = modal.classList.contains('modal--show');
    if (!isOpen) {
      modal.classList.add('modal--show');
      addEventListeners();

    } else {
      modal.classList.remove('modal--show');
      removeEventListeners();
    }
  }

  function closeModalOnEsc(evt) {
    const modalsToBury = document.querySelectorAll('.modal');
    if (evt.keyCode === ESC) {

      for (let i = 0; i < modalsToBury.length; i++) {
        modalsToBury[i].classList.remove('modal--show');
      }
      removeEventListeners();
    }
  }

  function closeModalOnClick(evt) {
    if (evt.target.classList.contains('modal--overlay') && !evt.target.classList.contains('help-button')) {
      const modalsToBury = document.querySelectorAll('.modal');
      for (let i = 0; i < modalsToBury.length; i++) {
        modalsToBury[i].classList.remove('modal--show');
      }
      removeEventListeners();
    }
  };

  if (help) {
    help.addEventListener('click', function (evt) {
      evt.preventDefault();
      onButtonClick(modalHelp);
    });
  }

  window.modal = {
    modalShow: modalShow
  };

})();
