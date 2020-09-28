import {yearFormatComments} from "../utils/common.js";
import AbstractView from "./abstract.js";
import {UpdateType, UserAction} from "../const.js";
import he from 'he';

const createPopupComment = (comment) => {

  return (
    `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="/images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji">
        </span>
        <div>
          <p class="film-details__comment-text">${he.encode(comment.comment)}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comment.author}</span>
            <span class="film-details__comment-day">${yearFormatComments(comment.date)}</span>
            <button class="film-details__comment-delete" data-id="${comment.id}">Delete</button>
          </p>
        </div>
      </li>`

  );

};

export default class Comments extends AbstractView {

  constructor(comment) {
    super();
    this._data = comment;
    this._handleClickDelete = this._handleClickDelete.bind(this);
  }


  _handleClickDelete(evt) {
    evt.preventDefault();
    evt.target.setAttribute(`disabled`, `disabled`);
    this._callback.click(UserAction.DELETE_COMMENT, UpdateType.MINOR, this._data);
    this.getElement().querySelector(`.film-details__comment-delete`).textContent = `Deleting...`;

  }

  setHandleClickDelete(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__comment-delete`).addEventListener(`click`, this._handleClickDelete);
  }

  getTemplate() {
    return createPopupComment(this._data);
  }
}
