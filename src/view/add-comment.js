import {EmotionType, UpdateType, UserAction} from '../const.js';
import Smart from './smart.js';

const SHAKE_CSS_ANIMATION = `shake`;

const creatAddComment = (comment) => {

  return (
    `<div class="film-details__new-comment">
    <div for="add-emoji" class="film-details__add-emoji-label" id="emoji">${comment.emotion
      ? `<img src="images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">`
      : ``}</div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${comment.comment || ``}</textarea>
    </label>

    <div class="film-details__emoji-list">
      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile"
        ${comment.emotion === EmotionType.SMILE ? `checked` : ``}
      >
      <label class="film-details__emoji-label" for="emoji-smile">
        <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping"
        ${comment.emotion === EmotionType.SlEEPING ? `checked` : ``}
      >
      <label class="film-details__emoji-label" for="emoji-sleeping">
        <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="puke"
        ${comment.emotion === EmotionType.PUKE ? `checked` : ``}
      >
      <label class="film-details__emoji-label" for="emoji-gpuke">
        <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry"
        ${comment.emotion === EmotionType.ANGRY ? `checked` : ``}
      >
      <label class="film-details__emoji-label" for="emoji-angry">
        <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
      </label>
    </div>
  </div>`);
};


export default class AddComment extends Smart {
  constructor() {
    super();
    this._callback = {};
    this._data = {};
    this._clickSmileHandler = this._clickSmileHandler.bind(this);
    this._onAddCommentKeydown = this._onAddCommentKeydown.bind(this);
    this.setInnerHandlers();
  }

  getTemplate() {
    return creatAddComment(this._data);
  }

  startErrorAnimation() {
    this.getElement().classList.remove(SHAKE_CSS_ANIMATION);
    setTimeout(() => {
      this.getElement().classList.add(SHAKE_CSS_ANIMATION);
    }, 0);
  }


  _clickSmileHandler(evt) {
    evt.preventDefault();

    this.updateData({

      emotion: evt.target.value,
      comment: this.getElement().querySelector(`.film-details__comment-input`).value,


    });
  }

  setInnerHandlers() {
    this.getElement().querySelector(`.film-details__emoji-list`).addEventListener(`change`, this._clickSmileHandler);

  }

  restoreHandlers() {
    this.setInnerHandlers();
    this.setAddCommentHandler(this._callback.addComment);
  }

  setAddCommentHandler(callback) {
    this._callback.addComment = callback;
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`keydown`, this._onAddCommentKeydown);

  }

  _onAddCommentKeydown(evt) {
    if (evt.key === `Enter` && (evt.ctrlKey || evt.metaKey)) {
      if (!this._data.emotion || !evt.target.value) {
        return;
      }

      evt.preventDefault();
      const newComment = {
        // comment:he.encode(this._data.localComment.comment),
        comment: this.getElement().querySelector(`.film-details__comment-input`).value,
        date: new Date().toISOString(),
        emotion: this._data.emotion,
      };

      this._callback.addComment(UserAction.ADD_COMMENT, UpdateType.MINOR, newComment);
      /*  const comments = [
         ...this._data.comments.slice(), newComment,

       ];
       this.updateData({
         comments,
         emotion: null,
       }); */
    }

  }


  disableComment() {
    this.getElement().querySelector(`.film-details__comment-input`).disabled = true;
    this.getElement().querySelectorAll(`.film-details__emoji-item`).forEach((element) => {
      element.disabled = true;
    });

  }

  enableComment() {
    this.getElement().querySelector(`.film-details__comment-input`).disabled = false;
    this.getElement().querySelectorAll(`.film-details__emoji-item`).forEach((element) => {
      element.disabled = false;
    });
  }


}

