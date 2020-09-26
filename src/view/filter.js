import AbstractView from "./abstract.js";
import {FilterType, MenuItem} from "../const.js";

const createFilterItemTemplate = (filter, currentFilterType, currentScreenType) => {
  const {type, name, count} = filter;
  return (
    `<a href="#${type}" id="${type}" class="main-navigation__item ${type === currentFilterType && currentScreenType === MenuItem.FILMS ? `main-navigation__item--active` : ``}" data-type="${MenuItem.FILMS}">
    ${name}
    ${type === FilterType.ALL ? `` : `
    <span class="main-navigation__item-count">
      ${count}
    </span>`
    }
  </a>`
  );
};

export const createFilterTemplate = (filterItems, currentFilterType, currentScreenType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType, currentScreenType))
    .join(``);

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${filterItemsTemplate}
    </div>
    <a href="#stats" id="stats" class="main-navigation__additional ${currentScreenType === MenuItem.STATISTICS ? `main-navigation__item--active` : ``}" data-type="${MenuItem.STATISTICS}">Stats</a>
  </nav>`;
};


export default class Filter extends AbstractView {
  constructor(filters, currentFilterType, currentScreenType) {
    super();
    this._filters = filters;
    this._currentFilterType = currentFilterType;
    this._currentScreenType = currentScreenType;
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);

  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilterType, this._currentScreenType);
  }


  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    let target = evt.target;
    if (!(`type` in target.dataset)) {
      target = evt.target.closest(`.main-navigation__item`);
    }

    if (target === null) {
      return;
    }

    let filterType = null;
    if (target.dataset.type === MenuItem.FILMS) {
      filterType = evt.target.closest(`.main-navigation__item`).id;
    }

    this._callback.filterTypeChange(filterType, target.dataset.type);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    this._callback.menuClickHandler();

  }

}

