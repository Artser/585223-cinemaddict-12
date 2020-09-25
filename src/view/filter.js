import AbstractView from "./abstract.js";
import {FilterType, MenuItem} from "../const.js";

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {type, name, count} = filter;

  return (
    `<a href="#${type}" id="${type}" class="main-navigation__item ${type === currentFilterType ? `main-navigation__item--active` : ``}" data-type="${MenuItem.FILMS}">
      ${name}
      ${type === FilterType.ALL ? `` : `
      <span class="main-navigation__item-count">
        ${count}
      </span>`
    }
    </a>`
  );
};

export const createFilterTemplate = (filterItems, currentFilterType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join(``);

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional" data-type="${MenuItem.STATISTICS}">Stats</a>
  </nav>`;
};


export default class Filter extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilterType = currentFilterType;
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);

  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilterType);
  }


  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.closest(`.main-navigation__item`).id);

  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().querySelector(`.main-navigation__items`).addEventListener(`click`, this._filterTypeChangeHandler);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    this._callback.menuClickHandler();

  }

}

