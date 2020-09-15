import {nanoid} from "nanoid";
import MoviesModel from "../model/movies.js";


const getSyncedMovies = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.film);
};

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getFilms() {
    if (Provider.isOnline()) {
      return this._api.getFilms()
        .then((films) => {
          const items = createStoreStructure(films.map(MoviesModel.adaptToServer));
          this._store.setItems(items);
          return films;
        });
    }

    const storeFilms = Object.values(this._store.getItems());

    return Promise.resolve(storeFilms.map(MoviesModel.adaptToClient));
  }

  updateFilm(film) {
    if (Provider.isOnline()) {
      return this._api.updateFilm(film)
        .then((updateFilm) => {
          this._store.setItem(updateFilm.id, MoviesModel.adaptToServer(updateFilm));
          return updateFilm;
        });
    }

    this._store.setItem(film.id, MoviesModel.adaptToServer(Object.assign({}, film)));

    return Promise.resolve(film);
  }

  getComments(filmId) {
    return this._api.getComments(filmId);
  }

  addComment(comment) {
    if (Provider.isOnline()) {
      return this._api.addComment(comment)
        .then((newComment) => {
          this._store.setItem(newComment.id, MoviesModel.adaptToServer(newComment));
          return newComment;
        });
    }

    // На случай локального создания данных мы должны сами создать `id`.
    // Иначе наша модель будет не полной, и это может привнести баги
    const localNewCommentId = nanoid();
    const localNewComment = Object.assign({}, comment, {id: localNewCommentId});

    this._store.setItem(localNewComment.id, MoviesModel.adaptToServer(localNewComment));

    return Promise.resolve(localNewComment);
  }

  deleteComment(comment) {
    if (Provider.isOnline()) {
      return this._api.deleteComment(comment)
        .then(() => this._store.removeItem(comment.id));
    }

    this._store.removeItem(comment.id);

    return Promise.resolve();
  }

  sync() {
    if (Provider.isOnline()) {
      const storeMovies = Object.values(this._store.getItems());

      return this._api.sync(storeMovies)
        .then((response) => {
          // Забираем из ответа синхронизированные задачи
          const createdMovies = getSyncedMovies(response.created);
          const updatedMovies = getSyncedMovies(response.updated);

          // Добавляем синхронизированные задачи в хранилище.
          // Хранилище должно быть актуальным в любой момент.
          const items = createStoreStructure([...createdMovies, ...updatedMovies]);

          this._store.setItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }

  static isOnline() {
    return window.navigator.onLine;
  }
}
