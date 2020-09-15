import Observer from "../utils/observer";

export default class Comment extends Observer {
  constructor() {
    super();
    this._comments = [];
  }

  setComments(data) {
    this._comments = data;
  }

  getComments() {
    return this._comments;
  }

  addComment(updateType, data) {
    this.setComments(data.comments);

    this._notify(updateType, data.movie);
  }

  deleteComment(updateType, data) {
    // console.log(comment);
    const index = this._comments.findIndex((item) => item.id === data.comment.id);
    if (index === -1) {
      throw new Error(`Unable to delete a nonexistent comment`);
    }

    this._comments = [
      ...this._comments.slice(0, index),
      ...this._comments.slice(index + 1)
    ];
    data.film.comments = [
      ...data.film.comments.slice(0, index),
      ...data.film.comments.slice(index + 1)
    ];
    this._notify(updateType, data.film);
  }
}
