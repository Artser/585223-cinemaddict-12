// Попап (расширенная информация о фильме)
import Smart from './smart.js';
import he from 'he';
import moment from 'moment';
import { EmotionType } from '../const.js';

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
                  <p class="film-details__title-original">Название: ${film.filmInfo.alternativeTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${film.filmInfo.totalRating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Режиссер</td>
                  <td class="film-details__cell">${film.filmInfo.director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Сценарист</td>
                  <td class="film-details__cell">${film.filmInfo.writers.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Актеры</td>
                  <td class="film-details__cell">${film.filmInfo.actors.join(`, `)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Год</td>
                  <td class="film-details__cell">${moment(film.filmInfo.release.date).format(`DD MMMM YYYY`)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Продолжительность</td>
                    <td class="film-details__cell">${moment(film.filmInfo.runtime).format(`h[h] mm[m]`)}</td >
                </tr >
                <tr class="film-details__row">
                  <td class="film-details__term">Страна</td>
                  <td class="film-details__cell">${film.filmInfo.release.releaseCountry}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Жанр</td>
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

          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label" id="emoji">${film.localComment.emotion
      ? `<img src="images/emoji/${film.localComment.emotion}.png" width="55" height="55" alt="emoji-smile">`
      : ``}</div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile"
                ${film.localComment.emotion === EmotionType.SMILE ? `checked` : ``}
              >
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping"
                ${film.localComment.emotion === EmotionType.SlEEPING ? `checked` : ``}
              >
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="puke"
                ${film.localComment.emotion === EmotionType.PUKE ? `checked` : ``}
              >
              <label class="film-details__emoji-label" for="emoji-gpuke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry"
                ${film.localComment.emotion === EmotionType.ANGRY ? `checked` : ``}
              >
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
  constructor(film, commentsModel) {
    super();
    this._data = film;
    this._data.localComment = {};
    this._commentsModel = commentsModel;
    this._clickHandlerDelete = this._clickHandlerDelete.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
    this._escCallback = {};
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._callback = {};
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._onAddCommentKeydown = this._onAddCommentKeydown.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._emojiChangeHandler = this._emojiChangeHandler.bind(this);
    this._setInnerHandlers();
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

  _onAddCommentKeydown(evt) {
//debugger;
    if (evt.key === `Enter` && (evt.ctrlKey || evt.metaKey)) {
      if (!this._data.localComment.emotion || !evt.target.value) {
        return;
      }

      evt.preventDefault();
      const newComment = {
        comment: evt.target.value,
        date: new Date(),
        emotion: this._data.localComment.emotion,
      };

      this._callback.addComment(newComment);
      /*  const comments = [
         ...this._data.comments.slice(), newComment,

       ];
       this.updateData({
         comments,
         emotion: null,
       }); */
    }

  }

  setAddCommentHandler(callback) {

    this._callback.addComment = callback;
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`keydown`, this._onAddCommentKeydown);
  }

  setCloseHandler(callback) {

    // 1. Поэтому колбэк мы запишем во внутреннее свойство
    this._callback.click = callback;
    // 2. В addEventListener передадим абстрактный обработчик
    this.getElement().querySelector(`#close-btn`).addEventListener(`click`, this._clickHandler);

  }

  _setInnerHandlers() {
    this.getElement().querySelector(`.film-details__emoji-list`).addEventListener(`change`, this._emojiChangeHandler);
    // this.getElement().querySelector(`.film-details__comments-list`).addEventListener(`click`, this._clickHandlerDelete);
    this.getElement().querySelector(`#watchlist`).addEventListener(`change`, this._watchlistClickHandler);
    this.getElement().querySelector(`#watched`).addEventListener(`click`, this._watchedClickHandler);
    this.getElement().querySelector(`#favorite`).addEventListener(`click`, this._favoriteClickHandler);

    // this.setCloseHandler(this._callback.click);

  }

  _emojiChangeHandler(evt) {
    // console.log(evt.target.value);
    evt.preventDefault();
    this.updateData({
      localComment: {
        emotion: evt.target.value,
      }
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
    const userDetails = Object.assign(
      {},
      this._data.userDetails,
      {
        watchlist: !this._data.userDetails.watchlist
      }
    );
    this.updateData({
      userDetails,

    });

  }

  _watchedClickHandler() {
    const userDetails = Object.assign(
      {},
      this._data.userDetails,
      {
        alreadyWatched: !this._data.userDetails.alreadyWatched
      }
    );
    this.updateData({
      userDetails,

    });
  }


  _favoriteClickHandler() {
    const userDetails = Object.assign(
      {},
      this._data.userDetails,
      {
        favorite: !this._data.userDetails.favorite
      }
    );
    this.updateData({
      userDetails,

    });
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseHandler(this._callback.click);
    this.setAddCommentHandler(this._callback.addComment);

  }

}


