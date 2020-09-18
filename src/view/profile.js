import { getUserRank } from "../utils/statistic.js";
import SmartView from "./smart.js";


export const createProfileTemplate = (watchedFilmsCount) => {
  const rank = getUserRank(watchedFilmsCount);

  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${rank}</p>
      <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class Profile extends SmartView {
  constructor(watchedFilmsCount) {
    super();
    this._data = {
      watchedFilmsCount,
    };
  }

  getTemplate() {
    return createProfileTemplate();
  }

  restoreHandlers() {
  }
}
