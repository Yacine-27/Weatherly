import "./address.css";
const header = document.querySelector("header");
export default function (address) {
  document.querySelector(".address")?.remove();
  const html = `<h1 class="address">${address}</h1>`;
  header.insertAdjacentHTML("afterbegin", html);
}
