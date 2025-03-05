import "./sideCard.css";
import { displaySVG } from "./mainCard";
import { displayDate, fahrenheitToCelsius } from "../logic/utilities";
export default function (weatherObject, unit) {
  return `        <div class="side-card" data-index="${weatherObject.index}">
                      <div class="side-card-date">${displayDate(weatherObject.date)}</div>
                      <div class="side-card-svg">
                          ${displaySVG(fahrenheitToCelsius(weatherObject.temprature))}
                      </div>
                      ${displaySideCardTemprature(weatherObject.temprature, unit)}
                  </div>`;
}

const displaySideCardTemprature = function (temprature, unit) {
  return unit === "c"
    ? `<div class="side-card-degree">${fahrenheitToCelsius(temprature)}&deg;C</div>`
    : `<div class="side-card-degree">${temprature}&deg;F</div>`;
};
