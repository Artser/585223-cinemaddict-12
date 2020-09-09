import moment from 'moment';


export const timeMinutesToHour = (time) => {
  const duration = moment.duration(time, `minutes`);
  return moment.utc(duration.asMilliseconds()).format(`h[h] mm[m]`);
};

export const yearFormat = (day, month, year) => {
  const dateRelease = moment(year + `-` + month + `-` + day).format(`DD MMMM YYYY`);
  return dateRelease;
};

export const yearFormatComments = (day) => {
  const dateComments = moment(day).format(`YYYY/MM/DD hh:mm`);
  return dateComments;
};

// Функция из интернета по генерации случайного числа из диапазона
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }
  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};
