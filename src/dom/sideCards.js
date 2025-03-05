import "./sideCards.css";
import displaySideCard from "./sideCard";
const sideCardsElement = document.querySelector(".side-cards");

export default function (weatherObjects, unit) {
  sideCardsElement.innerHTML = "";
  const html = weatherObjects
    .map((weatherObject) => displaySideCard(weatherObject, unit))
    .join("");
  sideCardsElement.insertAdjacentHTML("beforeend", html);
}
