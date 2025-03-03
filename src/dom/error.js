import "./error.css";

const main = document.querySelector("main");
export default function (error) {
  document.querySelector(".error")?.remove();
  const html = `<h2 class="error">${error}</h2>`;
  main.insertAdjacentHTML("afterbegin", html);
}
