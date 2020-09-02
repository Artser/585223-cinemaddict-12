import AbstractView from "./abstract.js";


const createNavigationTemplate = (navigationChecked) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" id="hrefWatchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${navigationChecked.watchlist}</span></a>
        <a href="#history" id="hrefHistory"class="main-navigation__item">History <span class="main-navigation__item-count">${navigationChecked.history}</span></a>
        <a href="#favorites" id="hrefFavorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${navigationChecked.favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};


export default class Navigation extends AbstractView {
  constructor(navigationChecked) {
    super();
    this._callback = {};
    this._navigationChecked = navigationChecked;
    this._clickFilterHandler = this._clickFilterHandler.bind(this);
  }

  getTemplate() {
    return createNavigationTemplate(this._navigationChecked);
  }

  _clickFilterHandler(evt) {
    evt.preventDefault();
    this._callback.clickFilter();

  }

  setClickHandlerFilter(callback) {
    this._callback.clickFilter = callback;
    this.getElement().querySelector(`.main-navigation__items`).addEventListener(`click`, this._clickFilterHandler);
  }
}

