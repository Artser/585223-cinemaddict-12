import {UserRank} from "../const.js";

export const getUserRank = (watchedFilmsCount) => {
  let rank = UserRank.NONE;

  switch (true) {
    case watchedFilmsCount > 0 && watchedFilmsCount <= 10:
      rank = UserRank.NOVICE;
      break;

    case watchedFilmsCount > 11 && watchedFilmsCount <= 20:
      rank = UserRank.FAN;
      break;

    case watchedFilmsCount > 21:
      rank = UserRank.MOVIE_BUFF;
      break;
  }

  return rank;
};
