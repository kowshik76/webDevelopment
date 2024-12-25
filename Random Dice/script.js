const button = document.getElementById("button");
const label = document.getElementById("label");
button.onclick = function () {
  let random = Math.floor(Math.random() * 6 + 1);
  label.textContent = random;
};
