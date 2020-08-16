import Profile from "./view/profile.js";
import Navigation from "./view/navigation.js";
import Sorting from "./view/sort.js";
import Films from "./view/films.js";
import Film from "./view/film.js";
import NoMovies from "./view/nomovies.js";
import ShowMoreButton from "./view/show-more-button.js";
import TopRated from "./view/top-rated.js";
import MostCommented from "./view/most-commented.js";
import {generateFilms} from "./mock/film.js";
import {RenderPosition, renderElement, siteHeaderElement, siteMainElement} from "./utils/render.js";


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
let renderCount = 5;

const buttonShow = new ShowMoreButton(films);
// renderElement(siteMainElement, buttonShow.getElement(), RenderPosition.BEFOREEND);

buttonShow.setClickHandler(() => {

  renderCount = generateFiveElement(renderCount);


});
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

if (films.length === 0) {
  renderElement(siteMainElement, new NoMovies().getElement(), RenderPosition.BEFOREEND);
} else {
  // ограничиваем количество карточек пятью и отображаем сразу
  for (let i = 0; i < 5; ++i) {
    renderElement(FilmListElement, new Film(films[i]).getElement(), RenderPosition.BEFOREEND);
  }
  renderElement(siteMainElement, buttonShow.getElement(), RenderPosition.BEFOREEND);


}


renderElement(siteMainElement, new TopRated().getElement(), RenderPosition.BEFOREEND);

renderElement(siteMainElement, new MostCommented(films).getElement(), RenderPosition.BEFOREEND);


