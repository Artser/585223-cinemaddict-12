import { RenderPosition, remove, render, footerElement, replace } from "../utils/render.js";
import FilmPopupView from "../view/film-popup.js";
import FilmView from "../view/film.js";
import { UserAction, UpdateType } from "../const.js";
import Comments from "../view/comments.js";
import CommentsModel from "../model/comments.js";
const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

export default class Film {
  constructor(filmListContainer, changeData, handlePopupChange, api) {
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._handlePopupChange = handlePopupChange;
    this._filmComponent = null;
    this._filmPopupComponent = null;
    this._mode = Mode.DEFAULT;
    this._api = api;
    this._commentModel = new CommentsModel();
    this._comments = null;

    this._clickWatchlist = this._clickWatchlist.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._clickWatched = this._clickWatched.bind(this);
    this._clickFavorite = this._clickFavorite.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._handlerCloseClick = this._handlerCloseClick.bind(this);
    this._handlerCloseKeyDown = this._handlerCloseKeyDown.bind(this);

  }

  init(film) {

    this._film = film;
    console.log(this._film);
    const prevFilmComponent = this._filmComponent;
    const prevFilmPopupComponent = this._filmPopupComponent;
    this._filmComponent = new FilmView(film);
    this._filmPopupComponent = new FilmPopupView(film, this._commentModel);
    this._filmComponent.setClickHandler(this._openPopup);
    this._filmComponent.setClickHandlerWatchlist(this._clickWatchlist);
    this._filmComponent.setClickHandlerWatched(this._clickWatched);
    this._filmComponent.setClickHandlerFavorite(this._clickFavorite);
    this._filmPopupComponent.setEscKeyDownHandler(this._handlerCloseKeyDown);
    if (prevFilmComponent === null || prevFilmPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filmComponent, prevFilmComponent);
    replace(this._filmPopupComponent, prevFilmPopupComponent);
    remove(prevFilmComponent);
    remove(prevFilmPopupComponent);
  }


  _clickWatchlist() {
    // console.log(this._film);
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              watchlist: !this._film.userDetails.watchlist
            }

          )
        }
      )
    );
  }

  _clickWatched() {
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              alreadyWatched: !this._film.userDetails.alreadyWatched
            }

          )
        }
      )
    );
  }

  _clickFavorite() {
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              favorite: !this._film.userDetails.favorite
            }

          )
        }

      )
    );
  }


  closeItemPopup() {
    this._closePopup();
  }

  _openPopup(evt) {
    if (evt.target.classList.contains(`film-card__controls-item`)) {
      return;
    }

    if (this._commentModel.getComments().length === 0) {
      this._api.getComments(this._film.id).then((items) => {
        this._commentModel.setComments(items);
        this._renderComments();
        this._filmPopupComponent.getElement().querySelector(`.film-details__comments-count`).textContent = items.length;
      });
    } else {
      this._renderComments();
    }
    this._renderPopup();

  }

  _renderPopup() {
    this._commentModel.addObserver(this._handleModelEvent);
    this._mode = Mode.POPUP;

    //TODO обнуляет комментарии.Зачем он здесь?
    //this._handlePopupChange();

    this._filmPopupComponent.setCloseHandler(this._handlerCloseClick);
    this._filmPopupComponent.restoreHandlers();

    render(footerElement, this._filmPopupComponent, RenderPosition.BEFOREEND);
  }

  _renderComments() {
    this._commentModel.getComments().map((item) => {

      const comment = new Comments(item);
      comment.setHandleClickDelete(this._handleViewAction);
      const newCommentElement = this._filmPopupComponent.getElement().querySelector(`.film-details__comments-list`);
      render(newCommentElement, comment, RenderPosition.BEFOREEND);
    });
  }

  _handlerCloseClick() {
    this._closePopup();
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.DELETE_COMMENT:
        this._commentModel.deleteComment(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.MINOR:
        this._commentModel.deleteComment(updateType, data);
        /*  this._api.updateFilm(update).then((response) => {
          this._filmsModel.updateFilm(updateType, response);

        }); */
        break;

      case UpdateType.MAJOR:
        remove(this._filmPopupComponent);
        this._renderPopup();
        break;
    }
  }

  _handlerCloseKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._closePopup();
    }
  }
  _closePopup() {
    remove(this._filmPopupComponent);
    this._mode = Mode.DEFAULT;
    this._commentModel.removeObserver(this._handleModelEvent);
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._filmPopupComponent);
  }

}


