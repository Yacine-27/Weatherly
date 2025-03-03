import "./styles.css";
import { getWeatherData } from "./api/weatherData";
import { getWeatherObject } from "./logic/weatherObject";
import displayMainCard from "./dom/mainCard";
const form = document.querySelector("form");
const main = document.querySelector("main");

let weatherData;
let unit = "c";

const handleFormInput = function (query) {
  getWeatherData(query).then((json) => {
    if (json) {
      weatherData = getWeatherObject(json);
      displayMainCard(weatherData, "c");
    }
  });
};

const toggleUnit = function () {
  unit = unit === "c" ? "f" : "c";
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = new FormData(this).get("query");
  handleFormInput(query);
  this.reset();
});

main.addEventListener("click", (event) => {
  if (event.target.classList.contains("main-card-unit-button")) {
    toggleUnit();
    displayMainCard(weatherData, unit);
  }
});

//TODO: modularize css.

// OPTIONAL:
//TODO: run a query for the next 5 days, when clicking on a day we display the info for that day.
//TODO: try using chartJS to do whatever.
//TODO: try saving the user location in localStorage and have the ability to change it.
//TODO: add a loading skeleton (or at least try to)
