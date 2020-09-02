import Navigation from "../view/navigation";
import {render, RenderPosition} from "../utils/render";
import {UpdateType} from "../const";


export default class Filter {
  constructor(containerFilter, navigationChecked, filterModel) {
    this._filterModel = filterModel;
    this._navigationChecked = navigationChecked;
    this._filterComponent = null;
    this._containerFilter = containerFilter;
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    this._filterComponent = new Navigation(this._navigationChecked);
    this._filterComponent.setClickHandlerFilter(this._handleFilterTypeChange);
    render(this._containerFilter, this._filterComponent, RenderPosition.AFTERBEGIN);


  }

  _handleFilterTypeChange(filterType) {
    if (filterType === this._currentFilter) {
      return;
    }

    this._filterModel.setFilter(filterType, UpdateType.MAJOR);
  }

}
