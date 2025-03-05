import "./mainCard.css";
import {
  coolSVG,
  hotSVG,
  coldSVG,
  dateSVG,
  humiditySVG,
  windSpeedSVG,
} from "./svgs";

import { fahrenheitToCelsius, displayDate } from "../logic/utilities";

export default function (weatherData, unit) {
  const main = document.querySelector("main");
  document.querySelector(".error")?.remove();
  document.querySelector(".main-card")?.remove();
  const html = `
        <div class="main-card">
        ${displayUnitButton(unit)}
        <div class="main-card--date">
        ${
          weatherData.index === 0
            ? "<p>Now</p>"
            : `${dateSVG()}
        <p>${displayDate(weatherData.date)}</p>`
        }
        
        </div>
        <div class="main-card--weather">    
          ${displayDegree(weatherData.temprature, unit)}
           ${displaySVG(fahrenheitToCelsius(Number(weatherData.temprature)))}
        </div>
          <div class="trailer-item trailer-item-description">
          <p>${weatherData.description}</p>
        </div>

        <div class="trailer-item">
          ${humiditySVG()}
          <p>Humidity : ${weatherData.humidity}%</p>
        </div>
        <div class="trailer-item">
          ${windSpeedSVG()}
          <p>Wind Speed : ${weatherData.windSpeed} km/hr</p>
        </div>
      </div>
  `;
  main.insertAdjacentHTML("beforeend", html);
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

export const displaySVG = function (degree) {
  return degree < 10 ? coldSVG() : degree > 30 ? hotSVG() : coolSVG();
};
