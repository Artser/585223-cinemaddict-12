import SmartView from "./smart.js";


export const createFooterTemplate = (films) => {

  return (
    `<p >${films}  movies inside</p>`
  );
};

export default class Footer extends SmartView {
  constructor(films) {
    super();
    this._films = films;

  }

  getTemplate() {
    return createFooterTemplate(this._films);
  }

  restoreHandlers() {
  }
}
