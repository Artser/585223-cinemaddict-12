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

  getWatchedFilms() {
    return this._films.filter((film)=>film.userDetails.alreadyWatched);
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
          filmInfo: Object.assign(
              {},
              film.film_info,
              {
                alternativeTitle: film.film_info.alternative_title,
                totalRating: film.film_info.total_rating,
                ageRating: film.film_info.age_rating,
                release: Object.assign(
                    {},
                    film.film_info.release,
                    {
                      releaseCountry: film.film_info.release.release_country,
                    })
              }
          ),

          userDetails: Object.assign(
              {},
              film.user_details,
              {
                watchingDate: film.user_details.watching_date,
                alreadyWatched: film.user_details.already_watched
              }
          )
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedFilm.user_details;
    delete adaptedFilm.film_info;
    delete adaptedFilm.filmInfo.alternative_title;
    delete adaptedFilm.filmInfo.age_rating;
    delete adaptedFilm.filmInfo.release.release_country;
    delete adaptedFilm.filmInfo.total_rating;
    delete adaptedFilm.userDetails.watching_date;

    delete adaptedFilm.userDetails.already_watched;


    return adaptedFilm;

  }

  static adaptToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          "film_info": Object.assign(
              {},
              film.filmInfo,
              {
                "alternative_title": film.filmInfo.alternativeTitle,
                "total_rating": film.filmInfo.totalRating,
                "age_rating": film.filmInfo.ageRating,
                "release": Object.assign(
                    {},
                    film.filmInfo.release,
                    {
                      "release_country": film.filmInfo.release.releaseCountry,
                    })
              }
          ),

          "comments": film.comments.map((item) => item.id || item),
          "user_details": Object.assign(
              {},
              film.userDetails,
              {
                "already_watched": film.userDetails.alreadyWatched,
                "watching_date": film.userDetails.watchingDate,

              }
          )
        }
    );
    // Ненужные ключи мы удаляем
    delete adaptedFilm.userDetails;
    delete adaptedFilm.filmInfo;
    delete adaptedFilm.film_info.alternativeTitle;
    delete adaptedFilm.film_info.totalRating;
    delete adaptedFilm.film_info.ageRating;
    delete adaptedFilm.film_info.release.releaseCountry;

    // console.log(adaptedFilm);

    return adaptedFilm;
  }
}

