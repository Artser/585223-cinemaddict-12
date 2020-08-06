import {createProfileTemplate} from "./view/profile.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createFilmTemplate} from "./view/film.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createTopRatedTemplate} from "./view/top-rated.js";
import {createMostCommentedTemplate} from "./view/most-commented.js";
import {generateFilms} from "./mock/film.js";
import {createFilmPopupTemplate} from "./view/film-popup.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);

// функция для рендеринга (вставки в DOM)
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const films = generateFilms();


render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);

render(siteMainElement, createFilmsTemplate(), `beforeend`);

const FilmListElement = siteMainElement.querySelector(`.films-list .films-list__container`);
// отображаем или рендерим
films.forEach((film) => {
  const filmTemplate = createFilmTemplate(film);
  render(FilmListElement, filmTemplate, `beforeend`);
});

render(siteMainElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteMainElement, createTopRatedTemplate(), `beforeend`);
render(siteMainElement, createMostCommentedTemplate(), `beforeend`);
render(footerElement, createFilmPopupTemplate(), `afterend`);
