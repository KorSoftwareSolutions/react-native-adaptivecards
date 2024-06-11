const WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const WEEKDAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getDaySuffix = (date: Date) => {
  const day = date.getDate();
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
const formatLongDate = (date: Date) => {
  return `${WEEKDAYS_LONG[date.getDay()]}, ${MONTHS_LONG[date.getMonth()]} ${date.getDate()}${getDaySuffix(date)}, ${date.getFullYear()}`;
};

const formatShortDate = (date: Date) => {
  return `${WEEKDAYS_SHORT[date.getDay()]}, ${MONTHS_SHORT[date.getMonth()]} ${date.getDate()}${getDaySuffix(date)}, ${date.getFullYear()}`;
};

const formatCompactDate = (date: Date) => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
// Example: Your package will arrive on {{DATE(2017-02-14T06:00:00Z, SHORT)}} at {{TIME(2017-02-14T06:00:00Z)}}
// Result: Your package will arrive on Tue, Feb 14th, 2017 at 6:00 AM
const formatDates = (text: string) => {
  let result = text;
  result = text.replace(/{{DATE\((.*?),LONG\)}}/g, (_, date) => {
    return formatLongDate(new Date(date));
  });
  result = result.replace(/{{DATE\((.*?),SHORT\)}}/g, (_, date) => {
    return formatShortDate(new Date(date));
  });
  result = result.replace(/{{DATE\((.*?),COMPACT\)}}/g, (_, date) => {
    return formatCompactDate(new Date(date));
  });

  result = result.replace(/{{DATE\((.*?)\)}}/g, (_, date) => {
    return formatCompactDate(new Date(date));
  });
  return result;
};

const formatMinutes = (minutes: number) => {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};

const getDayPeriod = (hours: number) => {
  return hours >= 12 ? "PM" : "AM";
};

const formatTimes = (text: string) => {
  let result = text;
  result = result.replace(/{{TIME\((.*?)\)}}/g, (_, date) => {
    const parsedDate = new Date(date);
    return `${parsedDate.getHours()}:${formatMinutes(parsedDate.getMinutes())} ${getDayPeriod(parsedDate.getHours())}`;
  });
  return result;
};

const formatDateTimes = (text: string) => {
  let result = text;
  result = formatDates(result);
  result = formatTimes(result);
  return result;
};

export const textRunUtils = {
  formatDateTimes,
};
