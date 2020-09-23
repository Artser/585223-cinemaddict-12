import AbstractView from "./abstract.js";


const createShowMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class ShowMoreButton extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._callback = {};

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

  getTemplate() {
    return createShowMoreButtonTemplate();
  }
}

