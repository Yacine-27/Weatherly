export const getConditions = function (json) {
  const currentConditions = {
    temprature: json.temp,
    humidity: json.humidity,
    windSpeed: json.windspeed,
  };
  return currentConditions;
};

export const getNext5Days = function (json) {
  return json.days.slice(1, 6);
};

export const getWeatherObject = function (json) {
  return {
    currentDay: getConditions(json.currentConditions),
    // next5Days: getNext5Days(json).map((day) => getConditions(day)),
    address: json.resolvedAddress,
  };
};
