const { yearFormatComments } = require("../utils/common");
import AbstractView from "./abstract.js";


const createPopupComments = (comments) => {

  return (
    `<ul class="film-details__comments-list">${comments.map((comment) => (
      `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="/images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji">
        </span>
        <div>
          <p class="film-details__comment-text">${comment.text}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comment.author}</span>
            <span class="film-details__comment-day">${yearFormatComments(comment.date)}</span>
            <button class="film-details__comment-delete" data-id="${comment.id}">Delete</button>
          </p>
        </div>
      </li>`
    ))}</ul>`
  );

};

export default class Comments extends AbstractView {

  constructor(comments) {
    super();
    this._data = comments;

  }

  getTemplate() {
    return createPopupComments(this._data);
  }
}
