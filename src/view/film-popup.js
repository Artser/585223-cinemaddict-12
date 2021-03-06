// Попап (расширенная информация о фильме)
import moment from 'moment';
import {UpdateType} from '../const.js';
import AbstractView from "./abstract.js";

export const createFilmPopupTemplate = (film, count) => {
  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button id="close-btn" class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src=${film.filmInfo.poster} alt="">

              <p class="film-details__age">18+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${film.filmInfo.title}</h3>
                  <p class="film-details__title-original">Original: ${film.filmInfo.alternativeTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${film.filmInfo.totalRating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${film.filmInfo.director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${film.filmInfo.writers.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${film.filmInfo.actors.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${moment(film.filmInfo.release.date).format(`DD MMMM YYYY`)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${moment.utc().startOf(`day`).add({minutes: film.filmInfo.runtime}).format(`h[h] mm[m]`)}</td >
                </tr >
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${film.filmInfo.release.releaseCountry}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${film.filmInfo.genre.length > 1 ? `Genres` : `Genre`}</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">${film.filmInfo.genre.join(`, `)}</span>
                  </td>
                </tr>
              </table >

              <p class="film-details__film-description">${film.filmInfo.description}</p>
            </div >
          </div >

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" ${film.userDetails.watchlist ? `checked` : ``} id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" ${film.userDetails.alreadyWatched ? `checked` : ``} id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" ${film.userDetails.favorite ? `checked` : ``} id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${count}</span></h3>

          <ul class="film-details__comments-list"></ul>


        </section>
      </div>
    </form>
    </section>`
  );
};


export default class FilmPopup extends AbstractView {
  constructor(film, commentsModel) {
    super();
    this._data = film;

    this._commentsModel = commentsModel;
    this._clickHandlerDelete = this._clickHandlerDelete.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmPopupTemplate(this._data, this._commentsModel.getComments().length);
  }

  _clickHandler(evt) {
    // 3. А внутри абстрактного обработчика вызовем колбэк
    this._callback.click(evt);

  }

  _clickHandlerDelete(evt) {
    if (!evt.target.classList.contains(`film-details__comment-delete`)) {
      return;
    }
    evt.preventDefault();
    const commentIndex = this._data.comments.findIndex((item) => item.id === parseInt(evt.target.dataset.id, 10));
    const comments = [
      ...this._data.comments.slice(0, commentIndex),
      ...this._data.comments.slice(commentIndex + 1),

    ];
    this.updateData({
      comments
    });

  }

  setCloseHandler(callback) {

    // 1. Поэтому колбэк мы запишем во внутреннее свойство
    this._callback.click = callback;
    // 2. В addEventListener передадим абстрактный обработчик
    this.getElement().querySelector(`#close-btn`).addEventListener(`click`, this._clickHandler);

  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClickHandler = callback;
    this.getElement().querySelector(`#watchlist`).addEventListener(`change`, this._watchlistClickHandler);

  }


  _watchlistClickHandler() {
    this._callback.watchlistClickHandler(UpdateType.PATCH);

  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClickHandler = callback;
    this.getElement().querySelector(`#watched`).addEventListener(`change`, this._watchedClickHandler);

  }

  _watchedClickHandler() {

    this._callback.watchedClickHandler(UpdateType.PATCH);

  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClickHandler = callback;
    this.getElement().querySelector(`#favorite`).addEventListener(`click`, this._favoriteClickHandler);

  }


  _favoriteClickHandler() {

    this._callback.favoriteClickHandler(UpdateType.PATCH);

  }

  restoreHandlers() {
    this.setCloseHandler(this._callback.click);

  }
}


