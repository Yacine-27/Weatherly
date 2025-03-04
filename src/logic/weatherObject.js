const getCurrentDayConditions = function (json) {
  const currentConditions = json.currentConditions;
  return {
    date: new Date(currentConditions.datetimeEpoch * 1000),
    temprature: currentConditions.temp,
    humidity: currentConditions.humidity,
    windSpeed: currentConditions.windspeed,
    description: json.description,
    index: 0,
  };
};

const getDayConditions = function (json, dayIndex) {
  return {
    date: new Date(json.datetimeEpoch * 1000),
    temprature: json.temp,
    humidity: json.humidity,
    windSpeed: json.windspeed,
    description: json.description,
    index: dayIndex,
  };
};

export const getWeatherObject = function (json) {
  let days = [];
  days.push(getCurrentDayConditions(json));
  json.days.slice(1, 6).forEach((day, index) => {
    days.push(getDayConditions(day, index + 1));
  });
  return {
    address: json.resolvedAddress,
    days,
  };
};
