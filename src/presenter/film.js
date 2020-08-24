import {RenderPosition, remove, render, footerElement} from "../utils/render.js";
import FilmPopupView from "../view/film-popup.js";
import FilmView from "../view/film.js";


export default class Film {
  constructor(filmListContainer, changeData) {
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;

    this._filmComponent = null;
    this._filmEditComponent = null;
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
    this._filmPopupComponent.setClickHandler(this._handlerCloseClick);
    this._filmPopupComponent.setEscKeyDownHandler(this._handlerCloseKeyDown);
    if (prevFilmComponent === null || prevFilmPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }
  }

  _openPopup() {
    render(footerElement, this._filmPopupComponent, RenderPosition.BEFOREEND);
  }

  _handlerCloseClick(evt) {
    if (evt.target.id === `close-btn`) {
      this._closePopup();
    }
  }

  _handlerCloseKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._closePopup();
    }
  }
  _closePopup() {
    remove(this._filmPopupComponent);
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._filmPopupComponent);
  }

}


