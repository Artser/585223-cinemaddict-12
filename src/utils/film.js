import moment from 'moment';

export const sortFilmDate = (filmB, filmA) => {

  return moment(filmA.filmInfo.release.date) - moment(filmB.filmInfo.release.date);
};

export const sortFilmRating = (filmA, filmB) => {


  return filmB.filmInfo.totalRating - filmA.filmInfo.totalRating;
};
