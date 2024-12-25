const input = document.getElementById("input");
const farenheit = document.getElementById("farenheit");
const celsius = document.getElementById("celsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let temp;
function convert() {
  if (farenheit.checked) {
    temp = Number(input.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (celsius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Enter the Number";
  }
}
