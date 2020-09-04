import Profile from "./view/profile.js";
// import Navigation from "./view/navigation.js";
import MoviesModel from "./model/movies.js";
import MovieListPresenter from "./presenter/movie-list.js";
import {RenderPosition, renderElement, siteHeaderElement, siteMainElement} from "./utils/render.js";
import {generateFilms} from "./mock/film.js";
import FilterPresenter from "./presenter/filter.js";
import FilterModel from "./model/filter.js";


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

const filmsModel = new MoviesModel();
filmsModel.setFilms(films);

const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter(siteMainElement, filterModel, filmsModel);
filterPresenter.init();

const movieList = new MovieListPresenter(siteMainElement, filmsModel);
movieList.init();


