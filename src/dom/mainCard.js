import "./mainCard.css";
import {
  coolSVG,
  hotSVG,
  coldSVG,
  dateSVG,
  locationSVG,
  humiditySVG,
  windSpeedSVG,
} from "./svgs";

export default function (weatherData, unit) {
  const main = document.querySelector("main");
  document.querySelector(".error")?.remove();
  document.querySelector(".main-card")?.remove();
  const html = `
        <div class="main-card">
        ${displayUnitButton(unit)}
        <p class="main-card--now">now</p>
        <div class="main-card--weather">    
          ${displayDegree(weatherData.currentDay.temprature, unit)}
           ${displaySVG(fahrenheitToCelsius(Number(weatherData.currentDay.temprature)))}
        </div>
        <div class="trailer-item">
          ${dateSVG()}
          <p>${new Date().toLocaleDateString()}</p>
        </div>
        <div class="trailer-item">
          ${locationSVG()}
          <p>${weatherData.address}</p>
        </div>
        <div class="trailer-item">
          ${humiditySVG()}
          <p>Humidity : ${weatherData.currentDay.humidity}%</p>
        </div>
        <div class="trailer-item">
          ${windSpeedSVG()}
          <p>Wind Speed : ${weatherData.currentDay.windSpeed} km/hr</p>
        </div>
      </div>
  `;
  main.insertAdjacentHTML("afterbegin", html);
}

const displayUnitButton = function (unit) {
  return unit === "c"
    ? '<button class="main-card-unit-button">&deg;F</button>'
    : '<button class="main-card-unit-button">&deg;C</button>';
};

const displayDegree = function (temprature, unit) {
  return unit === "c"
    ? `<h2 class="main-card--degree">${fahrenheitToCelsius(Number(temprature))} <span>&deg;C</span></h2>`
    : `<h2 class="main-card--degree">${temprature} <span>&deg;F</span></h2>`;
};

const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

const fahrenheitToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * (5 / 9)).toFixed(0);
};

const displaySVG = function (degree) {
  return degree < 10 ? coldSVG() : degree > 30 ? hotSVG() : coolSVG();
};
