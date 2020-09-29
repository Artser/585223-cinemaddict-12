import moment from 'moment';

export const yearFormatComments = (day) => {
  const dateComments = moment(day).format(`YYYY/MM/DD hh:mm`);
  return dateComments;
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
