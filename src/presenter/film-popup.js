import FilmPopup from "../view/film-popup.js";
import {RenderPosition, renderElement, footerElement} from "../utils/render.js";
export default class PopupShow {
  constructor() {

  }
  init(film) {
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
    filmPopupComponent.setwatchlistClickHandler(() => {
    });

    filmPopupComponent.setFavoriteClickHandler(() => {
    });

  }

}
