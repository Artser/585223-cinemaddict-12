import ProfilePresenter from "./presenter/profile.js";
import FooterPresenter from "./presenter/footer.js";
import FilmsModel from "./model/films.js";
import FilmListPresenter from "./presenter/film-list.js";
import {RenderPosition, siteHeaderElement, siteMainElement, render, remove, footerElement} from "./utils/render.js";
import FilterPresenter from "./presenter/filter.js";
import FilterModel from "./model/filter.js";
import Api from "./api/index.js";
import Store from "./api/store.js";
import Provider from "./api/provider.js";
import StatisticView from "./view/statistic.js";
import {MenuItem, UpdateType} from "./const.js";

const STORE_PREFIX = `cinemaddist-localstorage`;
const STORE_VER = `v12`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;
const store = new Store(STORE_NAME, window.localStorage);

const AUTHORIZATION = `Basic hS2sd3dfSwcl1sf3j`;
const END_POINT = `https://12.ecmascript.pages.academy/cinemaddict`;
const api = new Api(END_POINT, AUTHORIZATION);
const apiWithProvider = new Provider(api, store);


const filmsModel = new FilmsModel();

const filterModel = new FilterModel();


let statistic = null;


apiWithProvider.getFilms()
  .then((films) => {
    const profilePresenter = new ProfilePresenter(siteHeaderElement, filmsModel);
    profilePresenter.init();

    const filterPresenter = new FilterPresenter(siteMainElement, filterModel, filmsModel);
    filterPresenter.init();

    const filmList = new FilmListPresenter(siteMainElement, filmsModel, filterModel, apiWithProvider);
    filmList.init();

    const footerPresenter = new FooterPresenter(footerElement, films.length);
    footerPresenter.init();

    const handleSetMenuClick = (evt) => {
      const menuItem = evt.target.dataset.type;
      switch (menuItem) {
        case MenuItem.FILMS:

          if (statistic !== null) {
            filmList.init();
            remove(statistic);
            statistic = null;
          }
          break;
        case MenuItem.STATISTICS:
          if (statistic === null) {
            statistic = new StatisticView(filmsModel.getWatchedFilms());
            filmList.destroy();

            render(siteMainElement, statistic, RenderPosition.BEFOREEND);
            statistic.renderStatistic();
          }
          break;
      }


    };
    siteMainElement.addEventListener(`click`, handleSetMenuClick);

    filmsModel.setFilms(UpdateType.INIT, films);
  })


  .catch(() => {
    filmsModel.setFilms(UpdateType.INIT, []);

  });

window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`/sw.js`)
    .then((registration) => {
      registration.unregister().then(() => {

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

