const monthNamesArr = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthNames = {
  Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June",
  Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: "November", Dec: "December"
};

// eslint-disable-next-line
Date.prototype.addDays = function(days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDatesBetweenDates = ({ startAt, endAt }) => {
  const dateArray = [];
  let currentDate = startAt;
  while (currentDate <= endAt) {
    dateArray.push(new Date (currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};

export const getAllDatesAsString = ({ year, startAt, endAt }) => {
  const a = { startAt: new Date(`${year} ${startAt}`), endAt: new Date(`${year} ${endAt}`) };
  return getDatesBetweenDates(a).map(day => `${day.getDate()} ${monthNames[day.toLocaleString('en-us', { month: 'short' })]}`);
};

export const getDaysData = ({ id, year, startAt, endAt }) => {
  const a = { startAt: new Date(`${year} ${startAt}`), endAt: new Date(`${year} ${endAt}`) };
  return getDatesBetweenDates(a).map(date => ({ year_id: id, date }));
};

/**
 * Adds or removes an ID from an array
 * @param array
 * @param id
 * @returns {*[]}
 * @constructor
 */
export const AddOrRemoveId = (array, id) => {
  const index = array.indexOf(id);

  if (index > -1) {
    const newArr = [...array];
    newArr.splice(index, 1);
    return newArr
  } else {
    return [...array, id];
  }
};

/**
 * Checks if ID is in an array
 * @param array
 * @param id
 * @returns {boolean}
 */
export const idExistInArray = (array, id) => array.indexOf(id) > -1;

/**
 * Extract the date and month from a date-string
 * @param date
 * @returns {{date: number, month: number}}
 */
export const extractDates = (date) => {
  const dateObj = new Date(date);

  return {
    date: dateObj.getDate(),
    month: dateObj.getMonth()
  };
};

/**
 * Converts a date-string to a renderable string
 * @param unformattedDate
 * @param monthAsAbbr
 * @returns {string}
 */
export const convertDateToString = (unformattedDate, monthAsAbbr = true) => {
  const DDMM = extractDates(unformattedDate);
  const { date, month } = DDMM;

  const monthName = monthAsAbbr
    ? getDateAbbr(monthNamesArr[month])
    : monthNamesArr[month];

  return `${date} ${monthName}`;
};

/**
 * Cuts month name to short Abbr
 * @param monthName
 * @returns {string}
 */
export const getDateAbbr = monthName => monthName.substring(0, 3);

/**
 * Formats date
 * @param years
 * @param days
 * @param activeYear
 * @returns {string}
 */
export const formatDate = ({ year, startAt, endAt }) => {
  const fStartAt = ab(startAt);
  const fEndAt = ab(endAt);

  if (fStartAt.month === fEndAt.month && fStartAt.day === fEndAt.day) {
    return `${fStartAt.day.toString()} ${fStartAt.month} / ${year}`;
  }

  if (fStartAt.month === fEndAt.month) {
    return `${fStartAt.day.toString()} - ${fEndAt.day.toString()} ${fStartAt.month} / ${year}`;
  }

  return `${fStartAt.day.toString()} ${fStartAt.month} - ${fEndAt.day.toString()} ${fEndAt.month} / ${year}`;
};

const ab = str => {
  const [month, day] = str.split(' ');
  return { day: parseInt(day, 10), month: monthNames[month]}
};
