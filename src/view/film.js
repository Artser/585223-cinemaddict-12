import AbstractView from "./abstract.js";
import moment from 'moment';
import {UpdateType} from "../const.js";

const createFilmTemplate = (film) => {
  return (
    `<article class="film-card">
          <h3 class="film-card__title">${film.filmInfo.title}</h3>
          <p class="film-card__rating">${film.filmInfo.totalRating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${moment(film.filmInfo.release.date).format(`YYYY`)}</span>
            <span class="film-card__duration">${moment.utc().startOf(`day`).add({minutes: film.filmInfo.runtime}).format(`h[h] mm[m]`)}</span>
            <span class="film-card__genre">${film.filmInfo.genre.join(`, `)}</span>
          </p>
          <img src=${film.filmInfo.poster} alt="" class="film-card__poster">
          <p class="film-card__description">${film.filmInfo.description.length > 139 ? film.filmInfo.description.substring(0, 139) + `...` : film.filmInfo.description}</p>
          <a class="film-card__comments">${film.comments.length} comments</a>
          <form class="film-card__controls">
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${film.userDetails.watchlist ? `film-card__controls-item--active` : ``}"   id="film-watch">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${film.userDetails.alreadyWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${film.userDetails.favorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
          </form>
        </article>`
  );
};


export default class Film extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._clickHandlerWatchlist = this._clickHandlerWatchlist.bind(this);
    this._clickHandlerWatched = this._clickHandlerWatched.bind(this);
    this._clickHandlerFavorite = this._clickHandlerFavorite.bind(this);

  }

  _clickHandler(evt) {
    // 3. А внутри абстрактного обработчика вызовем колбэк
    this._callback.click(evt);

  }

  setClickHandler(callback) {
    // Мы могли бы сразу передать callback в addEventListener,
    // но тогда бы для удаления обработчика в будущем,
    // нам нужно было бы производить это снаружи, где-то там,
    // где мы вызывали setClickHandler, что не всегда удобно

    // 1. Поэтому колбэк мы запишем во внутреннее свойство
    this._callback.click = callback;
    // 2. В addEventListener передадим абстрактный обработчик
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _clickHandlerWatchlist(evt) {
    evt.preventDefault();

    this._callback.clickWatchlist(UpdateType.MINOR);

  }

  setClickHandlerWatchlist(callback) {
    this._callback.clickWatchlist = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._clickHandlerWatchlist);
  }

  _clickHandlerWatched(evt) {
    evt.preventDefault();
    this._callback.clicWatched(UpdateType.MINOR);

  }

  setClickHandlerWatched(callback) {
    this._callback.clicWatched = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._clickHandlerWatched);
  }

  _clickHandlerFavorite(evt) {
    evt.preventDefault();
    this._callback.clickFavorite(UpdateType.MINOR);

  }

  setClickHandlerFavorite(callback) {
    this._callback.clickFavorite = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._clickHandlerFavorite);
  }

  getTemplate() {
    return createFilmTemplate(this._film);
  }

}

