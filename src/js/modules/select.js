;
(function () {
  'use strict';

  const search = document.querySelector('.select__search');
  const dropdowns = document.querySelectorAll('.select__dropdown');
  const buttons = document.querySelectorAll('.select__button');

  // открытие селектов

  function onButtonClick(evt) {
    evt.preventDefault();
    const select = evt.target.parentNode;
    const dropdown = select.querySelector('.select__dropdown');
    const options = dropdown.querySelectorAll('.select__option');
    const button = select.querySelector('.select__button');
    const buttonActive = document.querySelector('.select__button--hidden');
    const dropdownActive = document.querySelector('.select__dropdown--show');

    if (dropdownActive) {
      dropdownActive.classList.remove('select__dropdown--show');
      buttonActive.classList.remove('select__button--hidden');
    }

    button.classList.add('select__button--hidden');
    dropdown.classList.add('select__dropdown--show');
    document.addEventListener('click', closeSelectOnClick);

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener('click', onOptionClick);
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onButtonClick);
  }

  // закрытие селектов

  function closeSelectOnClick(evt) {
    if (!evt.target.closest('.select') && !evt.target.classList.contains('select__option')) {
      selectClose();
    }
  }

  function selectClose() {
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('select__dropdown--show');
      buttons[i].classList.remove('select__button--hidden');
    }
  }

  // логика опций

  function onOptionClick(evt) {
    const activeDropdown = document.querySelector('.select__dropdown--show');
    const select = activeDropdown.parentNode;
    const button = select.querySelector('.select__button');
    button.textContent = evt.target.textContent;
    button.nextElementSibling.value = evt.target.value;
    selectClose();
  }

  // поиск

  function onSearchInput() {
    let inputValue = this.value;
    const list = document.querySelector('.select__list--search');
    const items = list.querySelectorAll('.select__item');
    const error = document.querySelector('.select__error');
    let exists = list.querySelectorAll('.select__item--hidden');

    if (exists.length < items.length) {
      error.style.display = 'none';
    } else {
      error.style.display = 'block';
    }

    for (let i = 0; i < items.length; i++) {
      const current = items[i];
      const text = current.textContent;
      if (text.search(new RegExp(inputValue, 'i')) < 0) {
        current.classList.add('select__item--hidden');
      } else {
        current.classList.remove('select__item--hidden');
      }
      exists = list.querySelectorAll('.select__item--hidden');
    }
  }

  if (search) {
    search.addEventListener('input', onSearchInput);
  }

})();
