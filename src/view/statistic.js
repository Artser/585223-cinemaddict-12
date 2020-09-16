import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { StatisticType } from "../const.js";
import SmartView from "./smart.js";
import moment from "moment";

const filterItemStatistic = (filter, currentStatType) => {
  return `<input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="${filter.id}" value="${filter.type}" ${filter.type === currentStatType ? `checked` : ``}>
  <label for="${filter.id}" class="statistic__filters-label">${filter.name}</label>`;
};

const createStatisticTemplate = (filters, currentStatType) => {
  const filterItemsTemplate = filters
    .map((filter) => filterItemStatistic(filter, currentStatType))
    .join(``);

  return `<section class="statistic">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">Sci-Fighter</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>
${filterItemsTemplate}
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">22 <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">130 <span class="statistic__item-description">h</span> 22 <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">Sci-Fi</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

  </section>`;
};

export default class Statistic extends SmartView {
  constructor(films) {
    super();
    this._callback = {};
    this._data = {
      films,
    };
    this._sourcedFilms = films;
    this._changeStatisticHandler = this._changeStatisticHandler.bind(this);
    this._currentStatType = StatisticType.ALL_TIME;
    this.setEnableChangeStatistic();

  }

  getTemplate() {
    return createStatisticTemplate(this._getFilters(), this._currentStatType);
  }

  restoreHandlers() {
    this.setEnableChangeStatistic();
  }

  setEnableChangeStatistic() {
    this.getElement().querySelector(`.statistic__filters`).addEventListener(`change`, this._changeStatisticHandler);
  }

  _changeStatisticHandler(evt) {
    this._currentStatType = evt.target.value;

    let filteredFilms;
    switch (this._currentStatType) {
      case StatisticType.ALL_TIME:
        filteredFilms = this._sourcedFilms;
        break;

      case StatisticType.TODAY:
        filteredFilms = this._sourcedFilms.filter((film) => {
          const startDate = moment().startOf(`day`);
          return moment(film.userDetails.watchingDate).isBetween(startDate, moment());
        });
        break;

      case StatisticType.WEEK:
        filteredFilms = this._sourcedFilms.filter((film) => {
          const startDate = moment().startOf(`day`).subtract(1, `week`);
          return moment(film.userDetails.watchingDate).isBetween(startDate, moment());
        });
        break;

      case StatisticType.MONTH:
        filteredFilms = this._sourcedFilms.filter((film) => {
          const startDate = moment().startOf(`day`).subtract(1, `month`);
          return moment(film.userDetails.watchingDate).isBetween(startDate, moment());
        });
        break;

      case StatisticType.YEAR:
        filteredFilms = this._sourcedFilms.filter((film) => {
          const startDate = moment().startOf(`day`).subtract(1, `year`);
          return moment(film.userDetails.watchingDate).isBetween(startDate, moment());
        });
        break;
    }

    this.updateData({
      films: filteredFilms,
    });
    this.renderStatistic();


  }


  _getFilters() {
    return [
      {
        type: StatisticType.ALL_TIME,
        name: `All time`,
        id: `statistic-all-time`
      },
      {
        type: StatisticType.TODAY,
        name: `Today`,
        id: `statistic-today`
      },
      {
        type: StatisticType.WEEK,
        name: `Week`,
        id: `statistic-week`
      },
      {
        type: StatisticType.MONTH,
        name: `Month`,
        id: `statistic-month`
      },
      {
        type: StatisticType.YEAR,
        name: `Year`,
        id: `statistic-year`
      },
    ];
  }

  renderStatistic() {
    artStatistic(this._data.films, this._currentStatType);
  }
}

const generateStatistic = (stCtx, genres, data) => {

  const myChart = new Chart(stCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: genres,
      datasets: [{
        data,
        backgroundColor: `#ffe800`,
        hoverBackgroundColor: `#ffe800`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 20
          },
          color: `#ffffff`,
          anchor: `start`,
          align: `start`,
          offset: 40,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#ffffff`,
            padding: 100,
            fontSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 24
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    }
  });
  return myChart;
};

const artStatistic = (films) => {

  const BAR_HEIGHT = 50;
  const statisticCtx = document.querySelector(`.statistic__chart`);
  if (statisticCtx === null) {
    return;
  }

  const genres = Array.from(new Set(films
    .filter((film) => film.userDetails.alreadyWatched)
    /* .filter((film) => {
      if (currentStatType === StatisticType.YEAR) {
        return moment(film.userDetails.watchingDate).format(`YYYY`) === moment().format(`YYYY`);
      }
      return true;
    })*/
    .map((film) => film.filmInfo.genre)
    .flat()));

  const data = [];
  films.filter((film) => film.userDetails.alreadyWatched)
    /*  .filter((film) => {
       if (currentStatType === StatisticType.YEAR) {
         return moment(film.userDetails.watchingDate).format(`YYYY`) === moment().format(`YYYY`);
       }
       return true;
     }) */
    .forEach((film) => {
      film.filmInfo.genre
        .forEach((genre) => {
          const index = genres.findIndex((item) => item === genre);
          data[index] = (data[index] || 0) + 1;
        });


    });

  // Обязательно рассчитайте высоту canvas, она зависит от количества элементов диаграммы
  statisticCtx.height = BAR_HEIGHT * genres.length;
  generateStatistic(statisticCtx, genres, data);

};
