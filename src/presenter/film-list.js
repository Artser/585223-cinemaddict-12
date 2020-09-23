import FilmsView from "../view/films.js";
import FilmPresenter from "./film.js";
import {filter} from "../utils/filter.js";
import LoadingView from "../view/loading.js";

import SortingView from "../view/sort.js";
import {SortType, UpdateType, UserAction} from "../const.js";

import {sortFilmDate, sortFilmRating} from "../utils/film.js";
import {updateItem} from "../utils/common.js";
import NoFilmsView from "../view/nofilms.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import {RenderPosition, remove, render} from "../utils/render.js";

const FILM_COUNT_PER_STEP = 5;

export default class FilmList {
  constructor(containerFilms, filmsModel, filterModel, api) {
    this._films = null;
    this._filterModel = filterModel;
    this._filmsModel = filmsModel;
    this._renderedFilmCount = FILM_COUNT_PER_STEP;
    this._filmsComponent = new FilmsView();
    this._sortComponent = null;
    this._noFilms = new NoFilmsView();
    this._ShowMoreButton = null;
    this._currentSortType = SortType.DEFAULT;
    this._containerFilms = containerFilms;
    this._filmPresenter = {};
    this._isLoading = true;
    this._api = api;
    this._loadingComponent = new LoadingView();
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handlePopupChange = this._handlePopupChange.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init() {
    this._films = this._getFilms();
    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
    this._renderFilmList();

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
    this._currentSortType = sortType;
    this._clearFilmList();
    this._renderFilmList();
  }

  _handlePopupChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.closeItemPopup());
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._sourceFilms = updateItem(this._sourceFilms, updatedFilm);
    this._filmPresenter[updatedFilm.id].init(updatedFilm);
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._api.updateFilm(update).then((response) => {
          this._filmsModel.updateFilm(updateType, response);

        });
        break;

      case UserAction.ADD_COMMENT:
        this._filmsModel.updateFilm(updateType, update);
        break;
    }
    // Здесь будем вызывать обновление модели.
    // actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
    // updateType - тип изменений, нужно чтобы понять, что после нужно обновить
    // update - обновленные данные
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._filmPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearFilmList();
        this._renderFilmList();
        break;
      case UpdateType.MAJOR:
        this._clearFilmList();
        this._renderFilmList();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderFilmList();
        break;
    }
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }
    this._sortComponent = new SortingView(this._currentSortType);
    render(this._containerFilms, this._sortComponent.getElement(), RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilm(film) {

    const filmListElement = this._filmsComponent.getElement().querySelector(`.films-list__container`);
    const filmPresenter = new FilmPresenter(filmListElement, this._handleViewAction, this._handlePopupChange, this._api);
    filmPresenter.init(film);
    this._filmPresenter[film.id] = filmPresenter;
  }

  _renderFilms(films) {

    films.forEach((film) => this._renderFilm(film));
  }

  _renderNoFilms() {
    render(this._containerFilms, this._noFilms, RenderPosition.AFTERBEGIN);
  }

  _handleLoadMoreButtonClick() {
    const films = this._films;
    const filmCount = films.length;
    const newRenderedFilmCount = Math.min(filmCount, this._renderedFilmCount + FILM_COUNT_PER_STEP);
    this._renderFilms(films.slice(this._renderedFilmCount, newRenderedFilmCount));
    this._renderedFilmCount = newRenderedFilmCount;
    if (this._renderedFilmCount >= filmCount) {
      this._ShowMoreButton.getElement().remove();
    }
  }

  _renderLoadMoreButton() {
    if (this._ShowMoreButton !== null) {
      this._ShowMoreButton = null;
    }
    this._ShowMoreButton = new ShowMoreButtonView();
    render(this._containerFilms, this._ShowMoreButton.getElement(), RenderPosition.BEFOREEND);

    this._ShowMoreButton.setClickHandler(this._handleLoadMoreButtonClick.bind(this));
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    remove(this._ShowMoreButton);
    remove(this._sortComponent);
    this._renderedFilmCount = FILM_COUNT_PER_STEP;
  }

  _getFilms() {
    const filterType = this._filterModel.getFilter();
    const films = this._filmsModel.getFilms().slice();
    const filteredFilms = filter[filterType](films);

    switch (this._currentSortType) {
      case SortType.DATE_UP:
        return filteredFilms.sort(sortFilmDate);
      case SortType.RATING:
        return filteredFilms.sort(sortFilmRating);
    }

    return filteredFilms;
  }

  _renderLoading() {
    render(this._containerFilms, this._loadingComponent, RenderPosition.AFTERBEGIN);
  }

  _renderFilmList() {

    if (this._isLoading) {
      this._renderLoading();
      return;
    }
    this._renderSort();
    render(this._containerFilms, this._filmsComponent.getElement(), RenderPosition.BEFOREEND);
    this._films = this._getFilms();
    const filmCount = this._films.length;

    this._renderFilms(this._films.slice(0, Math.min(filmCount, FILM_COUNT_PER_STEP)));
    if (filmCount > FILM_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderFilmsElements() {
    this._renderSort();
    this._renderFilmList();
  }

  destroy() {
    this._clearFilmList();
    this._filmsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);

    remove(this._filmsComponent);
  }

}
