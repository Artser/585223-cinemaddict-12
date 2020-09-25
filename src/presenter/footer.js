import {render, RenderPosition} from "../utils/render.js";
import FooterView from "../view/footer.js";

export default class Footer {
  constructor(container, count) {
    this._container = container;
    this._count = count;

  }

  init() {
    this._footerComponent = new FooterView(this._count);
    render(this._container, this._footerComponent, RenderPosition.BEFOREEND);

  }


}
