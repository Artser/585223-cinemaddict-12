import AbstractClickable from "./abstract-clickable.js";


const createShowMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class ShowMoreButton extends AbstractClickable {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }
}

// this._clickHandler = this._clickHandler.bind(this);
