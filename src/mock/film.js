import {getRandomInteger} from "../utils/common.js";

const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

// карточка фильма
export const generateFilm = () => {
  return {
    id: generateId(),
    title: generateTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
    genre: generateGenre(),
    duration: generateDuration(),
    year: generateYear(),
    rating: generateRating(),
    watchlist: trueOrFalse(),
    favorites: trueOrFalse(),
    watched: trueOrFalse(),
    director: generateDirector(),
    writers: generateWriters(),
    actors: generateActors(),
    release: {
      month: getRandomInteger(1, 12),
      day: getRandomInteger(1, 30)

    },
    country: generateCountry(),
    emotion: null,
    author: generateAuthor(),
    date: generateDate(),
  };
};

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

let trueOrFalse = () => {
  return !!getRandomInteger(0, 1);
};

const generateRating = () => {
  return rating[getRandomInteger(0, rating.length - 1)];
};

const rating = [
  `9.8`,
  `5.6`,
  `3.5`,
  `7.9`,
  `8.7`,
  `4.0`,
  `5.6`,
  `7.2`,
  `6.8`,
  `4.8`,
];

const generateYear = () => {
  return year[getRandomInteger(0, year.length - 1)];
};

const year = [
  `1960`,
  `1970`,
  `1980`,
  `1990`,
  `2000`,
  `2010`,
  `2020`,
  `2012`,
  `2015`,
  `2017`,
];


const generateDuration = () => {
  return duration[getRandomInteger(0, duration.length - 1)];
};

const duration = [
  60,
  90,
  120,
  75,
  110,
  85,
  65,
  105,
  95,
  70,
];

const generateGenre = () => {
  return genre[getRandomInteger(0, genre.length - 1)];
};

const genre = [`драма`, `комедия`, `боевик`, `мелодрама`, `триллер`];
const generateDescription = () => {
  const numberSentence = getRandomInteger(1, 5); // получаем количество  предложений
  const result = [];
  for (let i = 0; i < numberSentence; ++i) {
    result.push(text[getRandomInteger(0, text.length - 1)]); // добавляем в result по одному
  }
  return result.join(` `);
}; // получаем описание

// создали массив с эмоциями
const emotions = [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`];

const generateEmotion = () => {
  return `/images/emoji/${emotions[getRandomInteger(0, emotions.length - 1)]}`;
}; // получаем индекс эмоции

const titles = [
  `Бриллиантовая рука`,
  `Кавказская пленница`,
  `12 стульев`,
  `Мебиус`,
  `Карнавальная ночь`,
  `любовь и голуби`,
  `Стажер`,
  `Лысый нянь`,
  `Беверли хилс`,
  `Сваты`,
  `Близнецы`,
];

const generateTitle = () => {
  return titles[getRandomInteger(0, titles.length - 1)];
};

const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const generatePoster = () => {
  return `/images/posters/${posters[getRandomInteger(0, posters.length - 1)]}`;
};

const generateText = () => {
  return text[getRandomInteger(0, text.length - 1)];
};

const generateComment = () => {
  return {
    text: generateText(),
    emotion: generateEmotion(),
    author: generateAuthor(),
    date: generateDate(),
  };
};
const author = [
  `Дмитрий`,
  `Василий`,
  `Иван`,
  `Михаил`,
  `Константин`,
  `Петр`,
  `Ирина`,
  `Елена`,
  `Марина`,
  `Екатерина`,
];

const generateAuthor = () => {
  return author[getRandomInteger(0, author.length - 1)];
};

const generateDate = () => {
  const yearComments = getRandomInteger(1960, 2020);
  const month = getRandomInteger(0, 11);
  const day = getRandomInteger(0, 30);
  const min = getRandomInteger(1, 59);
  const hour = getRandomInteger(1, 23);

  return new Date(yearComments, month, day, hour, min).toString();
};

const generateComments = () => {
  const result = [];
  const count = getRandomInteger(0, 100);
  for (let i = 0; i < count; ++i) {
    result.push(generateComment());
  }
  return result;
};

export const generateFilms = () => {
  const films = [];
  for (let i = 0; i < 40; ++i) {
    films.push(generateFilm());
  }
  return films;
};


const directors = [
  `Тимур Бекмамбетов`,
  `Леван Габриадзе`,
  `Фёдор Бондарчук`,
  `Николай Лебедев`,
  `Дмитрий Дьяченко`,
  `Жора Крыжовников`,
  `Марюс Вайсберг`,
  `Сарик Андреасян`,
  `Андрей Кравчук`,
  `Кирилл Кузин`,
];

const generateDirector = () => {
  return directors[getRandomInteger(0, directors.length - 1)];
};

const writers = [
  `Роман Кантор`,
  `Рената Литвинова‎`,
  `Алексей Баталов`,
  `Андрей Тарковский`,
  `Эльдар Рязанов`,
  `Михаил Зощенко`,
  `Эмиль Брагинский`,
  `Юрий Нагибин`,
  `Григорий Чухрай`,
  `Дмитрий Марьянов`,
];

const generateWriters = () => {
  return writers[getRandomInteger(0, writers.length - 1)];
};

const actors = [
  `Данила Козловский`,
  `Александр Петров`,
  `Владимир Машков`,
  `Дмитрий Нагиев`,
  `Константин Хабенский`,
  `Евгений Миронов`,
  `Федор Бондарчук`,
  `Павел Прилучный`,
  `Владимир Вдовиченко`,
  `Владимир Вдовиченко`,
];

const generateActors = () => {
  return actors[getRandomInteger(0, actors.length - 1)];
};

const countrys = [
  `Россия`,
  `США`,
  `Италия`,
  `Германия`,
  `Франция`,
  `Австралия`,
];

const generateCountry = () => {
  return countrys[getRandomInteger(0, countrys.length - 1)];
};

