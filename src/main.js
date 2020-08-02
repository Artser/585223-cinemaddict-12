import {createProfileTemplate} from "./view/profile.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createFilmTemplate} from "./view/film.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createTopRatedTemplate} from "./view/top-rated.js";
import {createMostCommentedTemplate} from "./view/most-commented.js";
import {createFilmPopupTemplate} from "./view/film-popup.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);


// функция для рендеринга (вставки в DOM)
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const films = [{
  title: `The Dance of Life`,
  rating: 8.3,
  year: `1929`,
  duration: `1h 55m`,
  genre: `Musical`,
  poster: `./images/posters/the-dance-of-life.jpg`,
  description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr`,
  comments: `5 comments`,
},
{
  title: `Sagebrush Trail`,
  rating: 3.2,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  poster: `./images/posters/sagebrush-trail.jpg`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison
  determined to find the real killer. By chance Brant's narrow escap`,
  comments: `89 comments`,
},
{
  title: `The Man with the Golden Arm`,
  rating: 9.0,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm
  in Lexington, Kentucky with a set of drums and a new outlook on…`,
  comments: `18 comments`,
},
{
  title: `Santa Claus Conquers the Martians`,
  rating: 2.3,
  year: `1964`,
  duration: `1h 21m`,
  genre: `Comedy`,
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried
  that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  comments: `465 comments`,
},
{
  title: `Popeye the Sailor Meets Sindbad the Sailor`,
  rating: 6.3,
  year: `1936`,
  duration: `16m`,
  genre: `Cartoon`,
  poster: `./images/posters/popeye-meets-sinbad.png`,
  description: `In this short, Sindbad the Sailor (presumably Bluto playing a "role")
  proclaims himself, in song, to be the greatest sailor, adventurer and…`,
  comments: `0 comments`,
}
];

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createNavigationTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);

render(siteMainElement, createFilmsTemplate(), `beforeend`);

const FilmListElement = siteMainElement.querySelector(`.films-list .films-list__container`);
// отображаем или рендерим
films.forEach((film) => {
  const filmTemplate = createFilmTemplate(film);

  render(FilmListElement, filmTemplate, `beforeend`);
});

render(siteMainElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteMainElement, createTopRatedTemplate(), `beforeend`);
render(siteMainElement, createMostCommentedTemplate(), `beforeend`);
render(footerElement, createFilmPopupTemplate(), `afterend`);
