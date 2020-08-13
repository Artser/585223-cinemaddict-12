import {createProfileTemplate} from "./view/profile.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import Film from "./view/film.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createTopRatedTemplate} from "./view/top-rated.js";
import {createMostCommentedTemplate} from "./view/most-commented.js";
import {generateFilms} from "./mock/film.js";
import FilmPopup from "./view/film-popup.js";
import {RenderPosition, renderElement} from "./utils.js";
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);

// функция для рендеринга (вставки в DOM)
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const films = generateFilms(); // отрисовываем карточки
let navigationChecked = {
  watchlist: 0,
  favorites: 0,
  history: 0,
};

films.forEach((film) => {
  if ((film.watchlist === `checked`)) {
    navigationChecked.watchlist++;
  }
  if ((film.favorites === `checked`)) {
    navigationChecked.favorites++;
  }
  if ((film.watched === `checked`)) {
    navigationChecked.history++;
  }
});

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(navigationChecked), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const FilmListElement = siteMainElement.querySelector(`.films-list .films-list__container`);

// ограничиваем количество карточек пятью и отображаем сразу
for (let i = 0; i < 5; ++i) {
  renderElement(FilmListElement, new Film(films[i]).getElement(), RenderPosition.AFTERBEGIN);
  // render(FilmListElement, filmTemplate, `beforeend`);
}

const generateFiveElement = (lineCount) => {
  for (let i = lineCount; i < lineCount + 5; ++i) {
    renderElement(FilmListElement, new Film(films[i]).getElement(), RenderPosition.AFTERBEGIN);

  }
  lineCount += 5;
  if (lineCount >= films.length) {
    buttonShow.remove();
  }
  return lineCount;
};

render(siteMainElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteMainElement, createTopRatedTemplate(), `beforeend`);
render(siteMainElement, createMostCommentedTemplate(), `beforeend`);
renderElement(footerElement, new FilmPopup(films[0]).getElement(), RenderPosition.AFTERBEGIN);


let renderCount = 5;

const buttonShow = document.querySelector(`.films-list__show-more`);
buttonShow.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  renderCount = generateFiveElement(renderCount);
});
