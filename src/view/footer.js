import SmartView from "./smart.js";


export const createFooterTemplate = (filmsCount) => {

  return (
    `<p class="profile__rating">${filmsCount}  movies inside</p>`
  );
};

export default class Footer extends SmartView {
  constructor() {
    super();
  }

  getTemplate() {
    return createFooterTemplate(this._data.filmsCount);
  }

  restoreHandlers() {
  }
}
