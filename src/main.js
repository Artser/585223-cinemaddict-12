import ProfilePresenter from "./presenter/profile.js";

import MoviesModel from "./model/movies.js";
import MovieListPresenter from "./presenter/movie-list.js";
import {RenderPosition, siteHeaderElement, siteMainElement, render, remove} from "./utils/render.js";
import FilterPresenter from "./presenter/filter.js";
import FilterModel from "./model/filter.js";
import Api from "./api/index.js";
import Store from "./api/store.js";
import Provider from "./api/provider.js";
import Statistic from "./view/statistic.js";
import {MenuItem, UpdateType} from "./const.js";

const STORE_PREFIX = `cinemaddist-localstorage`;
const STORE_VER = `v12`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;
const store = new Store(STORE_NAME, window.localStorage);

const AUTHORIZATION = `Basic hS2sd3dfSwcl1sf3j`;
const END_POINT = `https://12.ecmascript.pages.academy/cinemaddict`;
const api = new Api(END_POINT, AUTHORIZATION);
const apiWithProvider = new Provider(api, store);


const filmsModel = new MoviesModel();

const filterModel = new FilterModel();


let statistic = null;

apiWithProvider.getFilms()
  .then((films) => {
    const profilePresenter = new ProfilePresenter(siteHeaderElement, filmsModel);
    profilePresenter.init();

    const filterPresenter = new FilterPresenter(siteMainElement, filterModel, filmsModel);
    filterPresenter.init();

    const movieList = new MovieListPresenter(siteMainElement, filmsModel, filterModel, apiWithProvider);
    movieList.init();
    const handleSetMenuClick = (evt) => {
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
          statistic = new Statistic(filmsModel.getWatchedFilms());
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
// 75 и 76 строку убрать для 9 задания и аргумент в 74 строке
// ниже для отключения
/* .then((registration) => {
  registration.unregister().then((success) => {
    console.log(success);

        // if boolean = true, unregister is successful
      });
    */

window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`/sw.js`)
    .then((registration) => {
      registration.unregister().then(() => {

        // if boolean = true, unregister is successful
      });
      // Действие, в случае успешной регистрации ServiceWorker
      console.log(`ServiceWorker available`); // eslint-disable-line
    }).catch(() => {
      // Действие, в случае ошибки при регистрации ServiceWorker
      console.error(`ServiceWorker isn't available`); // eslint-disable-line
    });
});


window.addEventListener(`online`, () => {
  document.title = document.title.replace(` [offline]`, ``);
  apiWithProvider.sync();
});

window.addEventListener(`offline`, () => {
  document.title += ` [offline]`;
});

