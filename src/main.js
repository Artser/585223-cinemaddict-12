"use strict";

const siteHeaderElement = document.querySelector(`.header`);

const createProfileTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const siteMainElement = document.querySelector(`.main`);

const createNavigationTemplate = () => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

const createSortTemplate = () => {
  return (
    ` <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

const createFilmsTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container"></div>
      </section>
    </section>`
  );
};

const createFilmTemplate = (film) => {
  return (
    `<article class="film-card">
          <h3 class="film-card__title">${film.title}</h3>
          <p class="film-card__rating">${film.rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${film.year}</span>
            <span class="film-card__duration">${film.duration}</span>
            <span class="film-card__genre">${film.genre}</span>
          </p>
          <img src=${film.poster} alt="" class="film-card__poster">
          <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…</p>
          <a class="film-card__comments">89 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};

const createShowMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

const createTopRatedTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

const createMostCommentedTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};
// функция для рендеринга (вставки в DOM)
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector('.films-list__container');

const films = [{
    title: "The Dance of Life",
    rating: 8.3,
    year: "1929",
    duration: "1h 55m",
    genre: "Musical",
    poster: "./images/posters/the-dance-of-life.jpg",
  },
  {
    title: "Sagebrush Trail",
    rating: 3.2,
    year: "1933",
    duration: "54m",
    genre: "Western",
    poster: "./images/posters/sagebrush-trail.jpg",
  },
  {
    title: "The Man with the Golden Arm",
    rating: 9.0,
    year: "1955",
    duration: "1h 59m",
    genre: "Drama",
    poster: "./images/posters/the-man-with-the-golden-arm.jpg",
  },
  {
    title: "Santa Claus Conquers the Martians",
    rating: 2.3,
    year: "1964",
    duration: "1h 21m",
    genre: "Comedy",
    poster: "./images/posters/santa-claus-conquers-the-martians.jpg",
  },
  {
    title: "Popeye the Sailor Meets Sindbad the Sailor",
    rating: 6.3,
    year: "1936",
    duration: "16m",
    genre: "Cartoon",
    poster: "./images/posters/popeye-meets-sinbad.png",
  }
];
//отображаем или рендерим
films.forEach((film) => {
  const filmTemplate = createFilmTemplate(film);

  render(mainElement, filmTemplate, `beforeend`);
});

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(), `afterbegin`);
render(siteMainElement, createSortTemplate(), `afterbegin`);

render(siteMainElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteMainElement, createTopRatedTemplate(), `beforeend`);
render(siteMainElement, createMostCommentedTemplate(), `beforeend`);

