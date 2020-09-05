import Navigation from "../view/navigation";
import {render, RenderPosition, replace, remove} from "../utils/render";
import {UpdateType, FilterType} from "../const";
import {filter} from "../utils/filter.js";

export default class Filter {
  constructor(filterContainer, filterModel, filmsModel) {
    this._filterModel = filterModel;
    this._filmsModel = filmsModel;
    this._filterComponent = null;
    this._filterContainer = filterContainer;
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

  }

  init() {
    this._currentFilter = this._filterModel.getFilter();
    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new Navigation(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.BEFOREEND);
      return;
    }
    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);

  }

  _handleModelEvent() {
    this.init();
  }


  _handleFilterTypeChange(filterType) {
    if (filterType === this._currentFilter) {
      return;
    }

    this._filterModel.setFilter(filterType, UpdateType.MAJOR);
  }

  _getFilters() {
    const films = this._filmsModel.getFilms();

    return [
      {
        type: FilterType.ALL,
        name: `All`,
        count: filter[FilterType.ALL](films).length
      },
      {
        type: FilterType.WATCHLIST,
        name: `Watchlist`,
        count: filter[FilterType.WATCHLIST](films).length
      },
      {
        type: FilterType.FAVORITES,
        name: `Favorites`,
        count: filter[FilterType.FAVORITES](films).length
      },
      {
        type: FilterType.HISTORY,
        name: `History`,
        count: filter[FilterType.HISTORY](films).length
      },

    ];
  }
}
