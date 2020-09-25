import {render, RenderPosition} from "../utils/render.js";
import FooterView from "../view/footer.js";

export default class Footer {
  constructor(container, films) {
    this._container = container;
    this._films = films;

  }

  init() {
    this._footerComponent = new FooterView(this._films.length);
    render(this._container, this._footerComponent, RenderPosition.BEFOREEND);

  }


}
