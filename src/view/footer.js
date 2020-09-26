import AbstractView from "./abstract.js";


export const createFooterTemplate = (count) => {
  return (
    `<p >${count}  movies inside</p>`
  );
};

export default class Footer extends AbstractView {
  constructor(count) {
    super();
    this._count = count;

  }

  getTemplate() {
    return createFooterTemplate(this._count);
  }

  restoreHandlers() {
  }
}
