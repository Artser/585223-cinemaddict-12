// import SortType from "../const.js";
import Films from "../view/films.js";

import Film from "../view/film.js";
import NoMovies from "../view/nomovies.js";
import ShowMoreButton from "../view/show-more-button.js";
// import TopRated from "../view/top-rated.js";
import FilmPopup from "../view/film-popup.js";
// import MostCommented from "../view/most-commented.js";
import {RenderPosition, renderElement, siteMainElement, footerElement} from "../utils/render.js";

const MOVIE_COUNT_PER_STEP = 5;

export default class MovieList {
  constructor(films) {
    this._films = films;
    this._renderedMovieCount = MOVIE_COUNT_PER_STEP;
    // this._currentSortType = SortType.DEFAULT;
    this._filmsComponent = new Films();
    // this._sortComponent = new SortView();
    this._filmComponent = new Film();
    this._noMovies = new NoMovies();
    this._ShowMoreButton = new ShowMoreButton();

    /* this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this); */
  }

  init(films) {
    this._films = films.slice();
    // 1. В отличии от сортировки по любому параметру,
    // исходный порядок можно сохранить только одним способом -
    // сохранив исходный массив:
    this._sourseFilms = films.slice();

    renderElement(siteMainElement, this._films, RenderPosition.BEFOREEND);


    this._renderFilmsElements();
  }

  _sortTasks(sortType) {
    // 2. Этот исходный массив задач необходим,
    // потому что для сортировки мы будем мутировать
    // массив в свойстве _boardTasks
    this._films = this._sourcedBoardTasks.slice();

    /* switch (sortType) {
      case SortType.DATE_UP:
        this._films.sort(sortTaskUp);
        break;
      case SortType.DATE_DOWN:
        this._films.sort(sortTaskDown);
        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this._films = this._sourcedBoardTasks.slice();
    } */

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTasks(sortType);
    this._clearTaskList();
    this._renderTaskList();
  }

  _renderSort() {
    renderElement(siteMainElement, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilm(film) {

    const FilmListElement = siteMainElement.querySelector(`.films-list .films-list__container`);
    const filmComponent = new Film(film);


    filmComponent.setClickHandler(() => {
      const filmPopupComponent = new FilmPopup(film);

      renderElement(footerElement, filmPopupComponent.getElement(), RenderPosition.BEFOREEND);
      filmPopupComponent.setClickHandler((evt) => {
        const target = evt.target;
        if (target.id === `close-btn`) {
          filmPopupComponent.getElement().remove();
        }
      });
      filmPopupComponent.setEscKeyDownHandler((evt) => {
        if (evt.key === `Escape` || evt.key === `Esc`) {
          evt.preventDefault();
          filmPopupComponent.getElement().remove();
        }
      });
    });

    /*
    const replaceCardToForm = () => {
      replace(taskEditComponent, taskComponent);
    };

    const replaceFormToCard = () => {
      replace(taskComponent, taskEditComponent);
    };
*/
    /*
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    taskComponent.setEditClickHandler(() => {
      replaceCardToForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    taskEditComponent.setFormSubmitHandler(() => {
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
*/
    renderElement(FilmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
  }

  _renderFilms(from, to) {

    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(film));
  }

  _renderNoMovies() {
    renderElement(siteMainElement, this._noMovies, RenderPosition.AFTERBEGIN);
  }

  _handleLoadMoreButtonClick() {
    this._renderFilms(this._renderedMovieCount, this._renderedMovieCount + MOVIE_COUNT_PER_STEP);
    this._renderedMovieCount += MOVIE_COUNT_PER_STEP;

    if (this._renderedMovieCount >= this._films.length) {
      this._loadMoreButtonComponent.getElement().remove();
    }
  }

  _renderLoadMoreButton() {
    renderElement(siteMainElement, this._ShowMoreButton.getElement(), RenderPosition.BEFOREEND);

    this._ShowMoreButton.setClickHandler(this._handleLoadMoreButtonClick.bind(this));
  }

  _clearTaskList() {
    this._filmsComponent.getElement().innerHTML = ``;
    this._renderedMovieCount = MOVIE_COUNT_PER_STEP;
  }

  _renderTaskList() {
    this._renderFilms(0, Math.min(this._films.length, MOVIE_COUNT_PER_STEP));

    if (this._films.length > MOVIE_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderFilmsElements() {
    /* if (this._films.every((task) => task.isArchive)) {
      this._renderNoTasks();
      return;
    } */

    // this._renderSort();
    this._renderTaskList();
  }
}
