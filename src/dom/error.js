import "./error.css";

const header = document.querySelector("header");
export default function (error) {
  document.querySelector(".error")?.remove();
  const html = `<h2 class="error">${error}</h2>`;
  header.insertAdjacentHTML("beforeend", html);
}
