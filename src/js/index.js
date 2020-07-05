import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

// const entryTextarea = document.querySelector(".newIdea--js");

// const saveButton = document.querySelector(".save--js");

// saveButton.addEventListener("click", () => {
//   localStorage.setItem("newIdea", entryTextarea.value);
// });

// const loadButton = document.querySelector(".load--js");

// loadButton.addEventListener("click", () => {
//   entryTextarea.value = localStorage.getItem("newIdea");
// });

const numberGlass = document.querySelector(".number--js");

let newNumber;

const plusGlass = document.querySelector(".plus--js");

const minusGlass = document.querySelector(".minus--js");

const water = document.querySelector(".app__image--water");

const key = new Date().toISOString().slice(0, 10);

plusGlass.addEventListener("click", () => {
  newNumber = numberGlass.textContent * 1 + 1;
  numberGlass.textContent = newNumber;
  localStorage.setItem(key, newNumber);
  water.style.opacity = localStorage.getItem(key) * 0.2;
});

minusGlass.addEventListener("click", () => {
  newNumber = numberGlass.textContent * 1 - 1;
  if (newNumber >= 0) {
    numberGlass.textContent = newNumber;
    localStorage.setItem(key, newNumber);
    water.style.opacity = localStorage.getItem(key) * 0.2;
  }
});

console.log(localStorage.getItem(key));

if (localStorage.getItem(key) == null) {
  localStorage.setItem(key, 0);
  water.style.opacity = localStorage.getItem(key) * 0.2;
}

if (localStorage.getItem(key) >= 0) {
  numberGlass.textContent = localStorage.getItem(key);
  water.style.opacity = localStorage.getItem(key) * 0.2;
}
