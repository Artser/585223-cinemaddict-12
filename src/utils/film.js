export const sortFilmDate = (filmB, filmA) => {

  return filmA.year - filmB.year;
};

export const sortFilmRating = (taskA, filmB) => {


  return filmB.rating - taskA.rating;
};
