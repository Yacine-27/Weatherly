import "./sideCards.css";
import displaySideCard from "./sideCard";
const sideCardsElement = document.querySelector(".side-cards");

const addSideCardHeader = function () {
  const html = `<h2 class="side-card-header">This Week Forecast: </h2>`;
  sideCardsElement.insertAdjacentHTML("afterbegin", html);
};

export default function (weatherObjects, unit) {
  sideCardsElement.innerHTML = "";
  addSideCardHeader();
  const html = weatherObjects
    .map((weatherObject) => displaySideCard(weatherObject, unit))
    .join("");
  sideCardsElement.insertAdjacentHTML("beforeend", html);
}
