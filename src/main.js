import Profile from "./view/profile.js";
import Navigation from "./view/navigation.js";
import Sorting from "./view/sort.js";
import Films from "./view/films.js";
import Film from "./view/film.js";
import ShowMoreButton from "./view/show-more-button.js";
import {createTopRatedTemplate} from "./view/top-rated.js";
import MostCommented from "./view/most-commented.js";
import {generateFilms} from "./mock/film.js";
import {RenderPosition, renderElement, siteHeaderElement, siteMainElement} from "./utils.js";


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
  if ((film.watchlist === true)) {
    navigationChecked.watchlist++;
  }
  if ((film.favorites === true)) {
    navigationChecked.favorites++;
  }
  if ((film.watched === true)) {
    navigationChecked.history++;
  }
});

renderElement(siteHeaderElement, new Profile(films).getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new Navigation(navigationChecked).getElement(), RenderPosition.AFTERBEGIN);

renderElement(siteMainElement, new Sorting().getElement(), RenderPosition.BEFOREEND);

renderElement(siteMainElement, new Films(films).getElement(), RenderPosition.BEFOREEND);

const FilmListElement = siteMainElement.querySelector(`.films-list .films-list__container`);

// ограничиваем количество карточек пятью и отображаем сразу
for (let i = 0; i < 5; ++i) {
  renderElement(FilmListElement, new Film(films[i]).getElement(), RenderPosition.BEFOREEND);
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

renderElement(siteMainElement, new ShowMoreButton(films).getElement(), RenderPosition.BEFOREEND);

render(siteMainElement, createTopRatedTemplate(), `beforeend`);
renderElement(siteMainElement, new MostCommented(films).getElement(), RenderPosition.BEFOREEND);

let renderCount = 5;

const buttonShow = document.querySelector(`.films-list__show-more`);
buttonShow.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  renderCount = generateFiveElement(renderCount);
});
