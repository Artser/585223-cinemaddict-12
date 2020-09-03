import {RenderPosition, remove, render, footerElement, replace} from "../utils/render.js";
import FilmPopupView from "../view/film-popup.js";
import FilmView from "../view/film.js";
import {UserAction, UpdateType} from "../const.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

export default class Film {
  constructor(filmListContainer, changeData, handlePopupChange) {
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._handlePopupChange = handlePopupChange;
    this._filmComponent = null;
    this._filmEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._clickWatchlist = this._clickWatchlist.bind(this);
    this._clickWatched = this._clickWatched.bind(this);
    this._clickFavorite = this._clickFavorite.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._handlerCloseClick = this._handlerCloseClick.bind(this);
    this._handlerCloseKeyDown = this._handlerCloseKeyDown.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevFilmPopupComponent = this._filmPopupComponent;
    this._filmComponent = new FilmView(film);
    this._filmPopupComponent = new FilmPopupView(film);
    this._filmComponent.setClickHandler(this._openPopup);
    this._filmComponent.setClickHandlerWatchlist(this._clickWatchlist);
    this._filmComponent.setClickHandlerWatched(this._clickWatched);
    this._filmComponent.setClickHandlerFavorite(this._clickFavorite);

    this._filmPopupComponent.setWatchedClickHandler(this._clickWatched);
    this._filmPopupComponent.setFavoriteClickHandler(this._clickFavorite);

    this._filmPopupComponent.setEscKeyDownHandler(this._handlerCloseKeyDown);
    if (prevFilmComponent === null || prevFilmPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filmComponent, prevFilmComponent);
    replace(this._filmPopupComponent, prevFilmPopupComponent);
    remove(prevFilmComponent);
    remove(prevFilmPopupComponent);
  }


  _clickWatchlist() {
    // console.log(this._film);
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              watchlist: !this._film.watchlist
            }
        )
    );
  }

  _clickWatched() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              watched: !this._film.watched
            }
        )
    );
  }

  _clickFavorite() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              favorites: !this._film.favorites
            }
        )
    );
  }


  closeItemPopup() {
    this._closePopup();
  }

  _openPopup(evt) {
    if (evt.target.classList.contains(`film-card__controls-item`)) {
      return;
    }
    this._mode = Mode.POPUP;
    this._handlePopupChange();
    this._filmPopupComponent.setCloseHandler(this._handlerCloseClick);
    this._filmPopupComponent.restoreHandlers();
    render(footerElement, this._filmPopupComponent, RenderPosition.BEFOREEND);
  }

  _handlerCloseClick() {
    this._closePopup();
  }

  _handlerCloseKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._closePopup();
    }
  }
  _closePopup() {
    remove(this._filmPopupComponent);
    this._mode = Mode.DEFAULT;

  }

  destroy() {
    remove(this._filmComponent);
    remove(this._filmPopupComponent);
  }

}


