// Попап (расширенная информация о фильме)
import Smart from "./smart.js";
import {timeMinutesToHour, yearFormat, yearFormatComments} from "../utils/common.js";
// import he from 'he';

const createPopupComments = (film) => {

  let textComments = ``;

  film.comments.forEach((comments) => {
    textComments += `<li class="film-details__comment">
                  <span class="film-details__comment-emoji">
                    <img src=${comments.emotion} width="55" height="55" alt="emoji">
                  </span>
                  <div>
                    <p class="film-details__comment-text">${comments.text}</p>
                    <p class="film-details__comment-info">
                      <span class="film-details__comment-author">${comments.author}</span>
                      <span class="film-details__comment-day">${yearFormatComments(comments.date)}</span>
                      <button class="film-details__comment-delete" data-id="${comments.id}">Delete</button>
                    </p>
                  </div>
                </li>`;
  });
  return textComments;


};

export const createFilmPopupTemplate = (film) => {
  return (
    `<section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
            <div class="film-details__close">
              <button id="close-btn" class="film-details__close-btn" type="button">close</button>
            </div>
            <div class="film-details__info-wrap">
              <div class="film-details__poster">
                <img class="film-details__poster-img" src=${film.poster} alt="">

                <p class="film-details__age">18+</p>
              </div>

              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${film.title}</h3>
                    <p class="film-details__title-original">Название: ${film.title}</p>
                  </div>

                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${film.rating}</p>
                  </div>
                </div>

                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Режиссер</td>
                    <td class="film-details__cell">${film.director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Сценарист</td>
                    <td class="film-details__cell">${film.writers}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Актеры</td>
                    <td class="film-details__cell">${film.actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Год</td>
                    <td class="film-details__cell">${yearFormat(film.release.day, film.release.month, film.year)}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Продолжительность</td>
                     <td class="film-details__cell">${timeMinutesToHour(film.duration)}</td >
                  </tr >
  <tr class="film-details__row">
    <td class="film-details__term">Страна</td>
    <td class="film-details__cell">${film.country}</td>
  </tr>
  <tr class="film-details__row">
    <td class="film-details__term">Жанр</td>
    <td class="film-details__cell">
      <span class="film-details__genre">${film.genre}</span>
    </td>
  </tr>
                </table >

  <p class="film-details__film-description">
    ${film.description}
  </p>
              </div >
            </div >

  <section class="film-details__controls">
    <input type="checkbox" class="film-details__control-input visually-hidden" ${film.watchlist ? `checked` : ``} id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" ${film.watched ? `checked` : ``} id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" ${film.favorites ? `checked` : ``} id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
            </section>
          </div>

      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${film.comments.length}</span></h3>

          <ul class="film-details__comments-list">`
    + createPopupComments(film) +

    `</ul>


          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label" id="emoji">${film.emotion
      ? `<img src="images/emoji/${film.emotion}.png" width="55" height="55" alt="emoji-smile">`
      : ``}</div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                  </label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                    <label class="film-details__emoji-label" for="emoji-sleeping">
                      <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>

                      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="puke">
                        <label class="film-details__emoji-label" for="emoji-gpuke">
                          <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                  </label>

                          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                            <label class="film-details__emoji-label" for="emoji-angry">
                              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                  </label>
                </div>
              </div>
            </section>
          </div>
        </form>
    </section>`
  );
};


export default class FilmPopup extends Smart {
  constructor(film) {
    super();
    this._data = film;

    this._clickHandlerDelete = this._clickHandlerDelete.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
    this._escCallback = {};
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._callback = {};
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);

    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._emojiChangeHandler = this._emojiChangeHandler.bind(this);
    this._setInnerHandlers();
  }

  getTemplate() {
    return createFilmPopupTemplate(this._data);
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

  _setInnerHandlers() {
    this.getElement().querySelector(`.film-details__emoji-list`).addEventListener(`change`, this._emojiChangeHandler);
    this.getElement().querySelector(`.film-details__comments-list`).addEventListener(`click`, this._clickHandlerDelete);
    this.getElement().querySelector(`#watchlist`).addEventListener(`change`, this._watchlistClickHandler);

    // this.setCloseHandler(this._callback.click);

    /*   this.setWatchedClickHandler(this._callback.watchedClick);
      this.setWatchlistClickHandler(this._callback.watchlistClick);
      this.setFavoriteClickHandler(this._callback.favoriteClick); */
  }

  _emojiChangeHandler(evt) {
    // console.log(evt.target.value);
    evt.preventDefault();
    this.updateData({
      emotion: evt.target.value,
    });
  }

  _escKeyDownHandler(evt) {
    // 3. А внутри абстрактного обработчика вызовем колбэк
    this._escCallback.keydown(evt);
  }

  setEscKeyDownHandler(callback) {
    // Мы могли бы сразу передать callback в addEventListener,
    // но тогда бы для удаления обработчика в будущем,
    // нам нужно было бы производить это снаружи, где-то там,
    // где мы вызывали setClickHandler, что не всегда удобно

    // 1. Поэтому колбэк мы запишем во внутреннее свойство
    this._escCallback.keydown = callback;
    // 2. В addEventListener передадим абстрактный обработчик
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _watchlistClickHandler() {
    this.updateData({
      watchlist: !this._data.watchlist
    });
  }

  _watchedClickHandler(evt) {
    this._callback.watchedClick(evt);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`#watched`).addEventListener(`click`, this._watchedClickHandler);

  }
  _favoriteClickHandler(evt) {
    this._callback.favoriteClick(evt);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`#favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseHandler(this._callback.click);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
  }

}


