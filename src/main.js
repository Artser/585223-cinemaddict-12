import Profile from "./view/profile.js";
import Navigation from "./view/navigation.js";
import MovieListPresenter from "./presenter/movie-list.js";
import {RenderPosition, renderElement, siteHeaderElement, siteMainElement} from "./utils/render.js";
import {generateFilms} from "./mock/film.js";


let films = generateFilms();
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

const MovieList = new MovieListPresenter(siteMainElement);


MovieList.init(films);

