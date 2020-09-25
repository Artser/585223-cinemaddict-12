import {EmotionType, UpdateType, UserAction} from '../const.js';
import SmartView from './smart.js';
import moment from "moment";

const SHAKE_CSS_ANIMATION = `shake`;

const creatAddComment = (comment, emotions) => {

  return (
    `<div class="film-details__new-comment">
    <div for="add-emoji" class="film-details__add-emoji-label" id="emoji">${comment.emotion
      ? `<img src="images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">`
      : ``}</div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${comment.comment || ``}</textarea>
    </label>

    <div class="film-details__emoji-list">${emotions.map((emotion) => (
      `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion.type}" value="${emotion.type}"
        ${comment.emotion === emotion.type ? `checked` : ``}
      >
      <label class="film-details__emoji-label" for="emoji-${emotion.type}">
        <img src="./images/emoji/${emotion.type}.png" width="30" height="30" alt="emoji">
      </label>`
    )).join(``)}
    </div>
  </div>`);
};


export default class AddComment extends SmartView {
  constructor() {
    super();
    this._data = {};
    this._clickSmileHandler = this._clickSmileHandler.bind(this);
    this._onAddCommentKeydown = this._onAddCommentKeydown.bind(this);
    this.setInnerHandlers();
  }

  getTemplate() {
    return creatAddComment(this._data, this._getEmotions());
  }

  startErrorAnimation() {
    this.getElement().classList.remove(SHAKE_CSS_ANIMATION);
    setTimeout(() => {
      this.getElement().classList.add(SHAKE_CSS_ANIMATION);
    }, 0);
  }

  _getEmotions() {
    return [{
      type: EmotionType.SMILE,
    },
    {
      type: EmotionType.SLEEPING,
    },
    {
      type: EmotionType.PUKE,
    },
    {
      type: EmotionType.ANGRY,
    }];
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
        comment: this.getElement().querySelector(`.film-details__comment-input`).value,
        date: moment().toISOString(),
        emotion: this._data.emotion,
      };

      this._callback.addComment(UserAction.ADD_COMMENT, UpdateType.MINOR, newComment);
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

