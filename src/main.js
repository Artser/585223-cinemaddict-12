import Profile from "./view/profile.js";
// import Navigation from "./view/navigation.js";
import MoviesModel from "./model/movies.js";
import MovieListPresenter from "./presenter/movie-list.js";
import {RenderPosition, renderElement, siteHeaderElement, siteMainElement, render, remove} from "./utils/render.js";
import FilterPresenter from "./presenter/filter.js";
import FilterModel from "./model/filter.js";
import Api from "./api.js";
import Statistic from "./view/statistic.js";
import {MenuItem, UpdateType} from "./const.js";

const AUTHORIZATION = `Basic hS2sd3dfSwcl1sf3j`;
const END_POINT = `https://12.ecmascript.pages.academy/cinemaddict`;
const api = new Api(END_POINT, AUTHORIZATION);

renderElement(siteHeaderElement, new Profile().getElement(), RenderPosition.BEFOREEND);

const filmsModel = new MoviesModel();

const filterModel = new FilterModel();


let statistic = null;

api.getFilms()
  .then((films) => {
/*     films.forEach((film) => {
 */     /*  api.getComments(film.id).then((comments) => {
        film.comments = comments;
      }) */
      /*   .catch(() => {
          document.querySelector(`.films`).innerHTML(`couldn't upload comments`);
        }); */
    /* }); */

    const filterPresenter = new FilterPresenter(siteMainElement, filterModel, filmsModel);
    filterPresenter.init();

    const movieList = new MovieListPresenter(siteMainElement, filmsModel, filterModel, api);
    movieList.init();
    const handleSetMenuClick = (evt) => {
      evt.preventDefault();
      const menuItem = evt.target.dataset.type;
      switch (menuItem) {
        case MenuItem.FILMS:
          if (statistic !== null) {
            movieList.init();
            remove(statistic);
            statistic = null;
          }
          break;
        case MenuItem.STATISTICS:
          statistic = new Statistic(filmsModel.getFilms());
          movieList.destroy();

          render(siteMainElement, statistic, RenderPosition.BEFOREEND);
          statistic.renderStatistic();
          break;
      }


    };
    siteMainElement.addEventListener(`click`, handleSetMenuClick);

    filmsModel.setFilms(UpdateType.INIT, films);
  })


  .catch(() => {
    filmsModel.setFilms(UpdateType.INIT, []);

  });
