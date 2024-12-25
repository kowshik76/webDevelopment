const Decrement = document.getElementById("Decrement");
const increment = document.getElementById("increment");
const Reset = document.getElementById("Reset");
const label = document.getElementById("label");
let counter = 0;

increment.onclick = function () {
  counter++;
  label.textContent = `${counter}`;
};
Decrement.onclick = function () {
  if (counter !== 0) {
    counter--;
  }
  label.textContent = `${counter}`;
};
Reset.onclick = function () {
  counter = 0;
  label.textContent = `${counter}`;
};
