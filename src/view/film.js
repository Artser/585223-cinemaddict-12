import {createElement, RenderPosition, renderElement, footerElement} from "../utils.js";
import FilmPopup from "./film-popup.js";

const createFilmTemplate = (film) => {
  return (
    `<article class="film-card">
          <h3 class="film-card__title">${film.title}</h3>
          <p class="film-card__rating">${film.rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${film.year}</span>
            <span class="film-card__duration">${film.duration}</span>
            <span class="film-card__genre">${film.genre}</span>
          </p>
          <img src=${film.poster} alt="" class="film-card__poster">
          <p class="film-card__description">${film.description}</p>
          <a class="film-card__comments">${film.comments.length} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};

export default class Film {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createFilmTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    this._element.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      let PopupFilmExm = new FilmPopup(this._film).getElement();

      renderElement(footerElement, PopupFilmExm, RenderPosition.AFTERBEGIN);

      PopupFilmExm.querySelector(`#close-btn`).addEventListener(`click`, function (e) {
        e.preventDefault();

        PopupFilmExm.remove();
      });
    }
    );

    return this._element;
  }

  removeElement() {
    this._element = null;
  }


}

