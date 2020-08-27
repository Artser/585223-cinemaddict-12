import Films from "../view/films.js";
import FilmPresenter from "./film.js";

import Sorting from "../view/sort.js";
import {SortType} from "../const.js";
import Film from "../view/film.js";
import {sortFilmDate, sortFilmRating} from "../utils/film.js";
import {updateItem} from "../utils/common.js";
import NoMovies from "../view/nomovies.js";
import ShowMoreButton from "../view/show-more-button.js";
import {RenderPosition, renderElement, remove} from "../utils/render.js";

const MOVIE_COUNT_PER_STEP = 5;

export default class MovieList {
  constructor(containerFilms) {
    this._renderedMovieCount = MOVIE_COUNT_PER_STEP;
    this._filmsComponent = new Films();
    this._sortComponent = new Sorting();
    this._filmComponent = new Film();
    this._noMovies = new NoMovies();
    this._ShowMoreButton = new ShowMoreButton();
    this._containerFilms = containerFilms;
    this._filmPresenter = {};
    this._handleFilmChange = this._handleFilmChange.bind(this);

    this._handleModeChange = this._handleModeChange.bind(this);// name

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(films) {
    this._films = films.slice();
    // 1. В отличии от сортировки по любому параметру,
    // исходный порядок можно сохранить только одним способом -
    // сохранив исходный массив:
    this._sourceFilms = films.slice();
    this._renderFilmsElements();
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._sourceFilms = updateItem(this._sourceFilms, updatedFilm);
    this._filmPresenter[updatedFilm.id].init(updatedFilm);
  }


  _sortFilms(sortType) {
    // 2. Этот исходный массив задач необходим,
    // потому что для сортировки мы будем мутировать
    // массив в свойстве _boardTasks

    switch (sortType) {
      case SortType.DATE_UP:
        this._films.sort(sortFilmDate);
        break;
      case SortType.RATING:
        this._films.sort(sortFilmRating);
        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this._films = this._sourceFilms.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortFilms(sortType);
    this._clearFilmList();
    this._renderFilmList();
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.closeItemPopup());
  }

  _handleFilmChange(updatedFilm) {
    // console.log(updatedFilm);

    this._films = updateItem(this._films, updatedFilm);
    this._sourceFilms = updateItem(this._sourceFilms, updatedFilm);
    this._filmPresenter[updatedFilm.id].init(updatedFilm);
  }

  _renderSort() {
    renderElement(this._containerFilms, this._sortComponent.getElement(), RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilm(film) {

    const filmListElement = this._filmsComponent.getElement().querySelector(`.films-list__container`);
    const filmPresenter = new FilmPresenter(filmListElement, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderFilms(from, to) {

    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(film));
  }

  _renderNoMovies() {
    renderElement(this._containerFilms, this._noMovies, RenderPosition.AFTERBEGIN);
  }

  _handleLoadMoreButtonClick() {
    this._renderFilms(this._renderedMovieCount, this._renderedMovieCount + MOVIE_COUNT_PER_STEP);
    this._renderedMovieCount += MOVIE_COUNT_PER_STEP;

    if (this._renderedMovieCount >= this._films.length) {
      this._ShowMoreButton.getElement().remove();
    }
  }

  _renderLoadMoreButton() {
    renderElement(this._containerFilms, this._ShowMoreButton.getElement(), RenderPosition.BEFOREEND);

    this._ShowMoreButton.setClickHandler(this._handleLoadMoreButtonClick.bind(this));
  }

  _clearFilmList() {
    // const FilmListElement = this._filmsComponent.getElement().querySelector(`.films-list__container`);
    // FilmListElement.innerHTML = ``;
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};

    this._renderedMovieCount = MOVIE_COUNT_PER_STEP;
  }

  _renderFilmList() {
    renderElement(this._containerFilms, this._filmsComponent.getElement(), RenderPosition.BEFOREEND);

    this._renderFilms(0, Math.min(this._films.length, MOVIE_COUNT_PER_STEP));

    if (this._films.length > MOVIE_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderFilmsElements() {
    this._renderSort();
    this._renderFilmList();
  }
  destroy() {
    remove(this._filmComponent);
  }

}
