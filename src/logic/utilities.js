export const fahrenheitToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * (5 / 9)).toFixed(0);
};

export const displayDate = function (date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
};

export const getDatesArray = function (days) {
  return days.map((day) => displayDate(day.date));
};

export const getTempsArray = function (days, unit) {
  if (unit === "c") {
    return days.map((day) => fahrenheitToCelsius(day.temprature));
  } else if (unit === "f") {
    return days.map((day) => day.temprature);
  }
};
