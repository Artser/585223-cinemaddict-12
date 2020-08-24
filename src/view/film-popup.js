// Попап (расширенная информация о фильме)
import Abstract from "./abstract.js";


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
                      <span class="film-details__comment-day">${comments.date}</span>
                      <button class="film-details__comment-delete">Delete</button>
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
                    <td class="film-details__cell">${film.release}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Продолжительность</td>
                    <td class="film-details__cell">${film.duration}</td>
                  </tr>
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
                </table>

                <p class="film-details__film-description">
                ${film.description}
                </p>
              </div>
            </div>

            <section class="film-details__controls">
              <input type="checkbox" class="film-details__control-input visually-hidden" ${film.watchlist ? `checked` : ``} id="watchlist2" name="watchlist">
              <label for="watchlist2" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

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
                <div for="add-emoji" class="film-details__add-emoji-label"></div>

                <label class="film-details__comment-label">
                  <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
                </label>

                <div class="film-details__emoji-list">
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-smile">
                    <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                  </label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
                  <label class="film-details__emoji-label" for="emoji-sleeping">
                    <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-gpuke">
                    <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                  </label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
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


export default class FilmPopup extends Abstract {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._escCallback = {};
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._callback = {};
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);

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

  _watchlistClickHandler(evt) {
    this._callback.watchlistClick(evt);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`#watchlist2`).addEventListener(`click`, this._watchlistClickHandler);

  }

  _favoriteClickHandler(evt) {
    this._callback.favoriteClick(evt);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`#favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  getTemplate() {
    return createFilmPopupTemplate(this._film);
  }

}


