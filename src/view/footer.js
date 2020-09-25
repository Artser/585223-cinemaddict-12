import SmartView from "./smart.js";


export const createFooterTemplate = (count) => {
  return (
    `<p >${count}  movies inside</p>`
  );
};

export default class Footer extends SmartView {
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
