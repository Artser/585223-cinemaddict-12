import Observer from "../utils/observer.js";

export default class Movies extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(updateType, films) {
    this._films = films.slice();
    this._notify(updateType);
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

  static adaptToClient(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          userDetails: Object.assign(
              {},
              film.user_details,
              {
                alreadyWatched: film.user_details.already_watched
              }
          )
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedFilm.user_details;
    delete adaptedFilm.userDetails.already_watched;


    // console.log(adaptedFilm);
    return adaptedFilm;
  }

  static adaptToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          "comments": film.comments.map((item)=>item.id),
          "user_details": Object.assign(
              {},
              film.userDetails,
              {
                "already_watched": film.userDetails.alreadyWatched
              }
          )
        }
    );
    // Ненужные ключи мы удаляем
    delete adaptedFilm.userDetails;


    return adaptedFilm;
  }
}

