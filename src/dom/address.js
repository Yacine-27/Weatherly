import "./address.css";
const header = document.querySelector("header");
export default function (address) {
  document.querySelector(".address")?.remove();
  document.querySelector(".side-card-header")?.remove();
  const html = `<h1 class="address">${address}</h1>
                <h2 class="side-card-header">This Week Forecast: </h2>`;
  header.insertAdjacentHTML("afterbegin", html);
}
