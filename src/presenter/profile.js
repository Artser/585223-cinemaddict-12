import { render, RenderPosition } from "../utils/render.js";
import ProfileView from "../view/profile.js";

export default class Profile {
  constructor(container, filmsModel) {
    this._container = container;
    this._filmsModel = filmsModel;
    this._profileComponent = null;
    this._handleModelEvent = this._handleModelEvent.bind(this);

  }

  init() {
    this._profileComponent = new ProfileView(this._filmsModel.getWatchedFilms().length);
    render(this._container, this._profileComponent, RenderPosition.BEFOREEND);

    this._filmsModel.addObserver(this._handleModelEvent);

  }


  _handleModelEvent() {
    debugger;
    this._profileComponent.updateData({
      watchedFilmsCount: this._filmsModel.getWatchedFilms().length,
    });
  }

}
