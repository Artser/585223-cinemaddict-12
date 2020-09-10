export const sortFilmDate = (filmB, filmA) => {

  return filmA.release.date - filmB.release.date;
};

export const sortFilmRating = (filmA, filmB) => {


  return filmB.totalRating - filmA.totalRating;
};
