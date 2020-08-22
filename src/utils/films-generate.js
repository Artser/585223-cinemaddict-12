import {generateFilms} from "./mock/film.js";
let films = generateFilms(); // отрисовываем карточки
let navigationChecked = {
  watchlist: 0,
  favorites: 0,
  history: 0,
};
films.forEach((film) => {
  if ((film.watchlist === true)) {
    navigationChecked.watchlist++;
  }
  if ((film.favorites === true)) {
    navigationChecked.favorites++;
  }
  if ((film.watched === true)) {
    navigationChecked.history++;
  }
});

export default films;
