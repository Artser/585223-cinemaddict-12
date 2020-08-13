import {createElement} from "../utils.js";

const createShowMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;


export default class ShowMoreButton {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createShowMoreButtonTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
