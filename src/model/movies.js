import Observer from "../utils/observer.js";

export default class Movies extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(updateType, films) {
    console.log(updateType, films);
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
          title: film.film_info.title,
          poster: film.film_info.poster,
          description: film.film_info.description,
        // comments: generateComments(),
        genre: film.film_info.genre[0],
        duration: film.film_info.runtime,
        year: film.film_info.release.date !== null ? new Date(film.film_info.release.date).getFullYear() : film.film_info.release.date,

        rating: film.film_info.age_rating,
        watchlist: film.user_details.watchlist,
        favorites: film.user_details.favorite,
        watched: film.user_details.already_watched,
        director: film.film_info.director,
        writers: film.film_info.writers[0],
        actors: film.film_info.actors[0],
        release: {
          month: film.film_info.release.date !== null ? new Date(film.film_info.release.date).getMonth() : film.film_info.release.date,
          day: film.film_info.release.date !== null ? new Date(film.film_info.release.date).getDate() : film.film_info.release.date

        },
        country: film.film_info.release.release_country,
        emotion: null,
        author: `123`,
        date: film.film_info.release.date !== null ? new Date(film.film_info.release.date).toString() : film.film_info.release.date,


      }
    );

    // Ненужные ключи мы удаляем

    delete adaptedFilm.film_info;
    delete adaptedFilm.user_details;

    // console.log(adaptedFilm);
    return adaptedFilm;
  }

  static adaptToServer(task) {
    const adaptedTask = Object.assign(
      {},
      task,
      {
        "due_date": task.dueDate instanceof Date ? task.dueDate.toISOString() : null, // На сервере дата хранится в ISO формате
        "is_archived": task.isArchive,
        "is_favorite": task.isFavorite,
        "repeating_days": task.repeating
      }
    );

    // Ненужные ключи мы удаляем
    delete adaptedTask.dueDate;
    delete adaptedTask.isArchive;
    delete adaptedTask.isFavorite;
    delete adaptedTask.repeating;

    return adaptedTask;
  }
}

