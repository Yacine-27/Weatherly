import "./styles.css";

import { getWeatherData } from "./api/weatherData";
import { getWeatherObject } from "./logic/weatherObject";
import displayMainCard from "./dom/mainCard";
import displayAddress from "./dom/address";
import dislaySideCards from "./dom/sideCards";
import displayChart from "./dom/chart";
import { getDatesArray, getTempsArray } from "./logic/utilities";
const form = document.querySelector("form");
const main = document.querySelector("main");
const sideCards = document.querySelector(".side-cards");
const sideCardsChildren = sideCards.children;

let selectedDay;
let weatherData;
let unit = "c";

const selectLocation = function (location) {
  if (!location) return;
  getWeatherData(location).then((json) => {
    if (json) {
      weatherData = getWeatherObject(json);
      selectedDay = 0;
      displayAddress(weatherData.address);
      displayMainCard(weatherData.days[selectedDay], "c");
      dislaySideCards(weatherData.days, unit);
      displayChart(
        getDatesArray(weatherData.days),
        getTempsArray(weatherData.days, unit),
        unit,
      );
    }
  });
};

const handleFormInput = function (query) {
  selectLocation(query);
};

const toggleUnit = function () {
  unit = unit === "c" ? "f" : "c";
};

const findSideCardDOM = function (index) {
  return sideCards?.querySelector(`[data-index="${index}"]`);
};

const selectSideCard = function (index) {
  for (const sideCard of sideCardsChildren) {
    sideCard.classList.remove("side-card-selected");
  }
  findSideCardDOM(index).classList.add("side-card-selected");
};

const selectDate = function (index) {
  selectedDay = index;
  displayMainCard(weatherData.days[selectedDay], unit);
  selectSideCard(index);
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
    displayMainCard(weatherData.days[selectedDay], unit);
    dislaySideCards(weatherData.days, unit);
    displayChart(
      getDatesArray(weatherData.days),
      getTempsArray(weatherData.days, unit),
      unit,
    );
  }
  if (event.target.closest(".side-card")) {
    selectDate(Number(event.target.closest(".side-card").dataset.index));
  }
});

window.addEventListener("unload", () => {
  if (weatherData) {
    localStorage.clear();
    localStorage.setItem("location", weatherData.address);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("location")) return;
  selectLocation(localStorage.getItem("location"));
});
