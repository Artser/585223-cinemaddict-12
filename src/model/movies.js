import Observer from "../utils/observer.js";

export default class Movies extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(films) {
    this._films = films.slice();
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, film) {
    const index = this._films.findIndex((item) => item.id === film.id);
    if (index === -1) {
      throw new Error(`Unable to update a nonexistent movie`);
    }

    this._films = [
      ...this._films.slice(0, index),
      film,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, film);
  }
}

