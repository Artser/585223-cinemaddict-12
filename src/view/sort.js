import AbstractView from "./abstract.js";
import {SortType} from "../const.js";

const createSortTemplate = (currentSortType, sorts) => {
  return `<ul class="sort">${sorts.map((sort)=>(
    `<li><a href="#" class="sort__button ${currentSortType === sort.type ? `sort__button--active` : ``}" data-sort-type="${sort.type}">${sort.name}</a></li>`
  )).join(``)}
    </ul>`;
};

export default class Sort extends AbstractView {
  constructor(currentSortType) {
    super();
    this._currentSortType = currentSortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate(this._currentSortType, this._getSorts());
  }

  _getSorts() {
    return [{
      type: SortType.DEFAULT,
      name: `Sort by default`,
    },
    {
      type: SortType.DATE_UP,
      name: `Sort by date`,
    },
    {
      type: SortType.RATING,
      name: `Sort by rating`,
    }
    ];
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);

  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

}
