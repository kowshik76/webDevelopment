function updatecheck() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const meridian = hours >= 12 ? "PM" : "AM";
  const seconds = date.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${seconds} ${meridian}`;
  document.getElementById("clock").textContent = time;
}
updatecheck();
setInterval(updatecheck, 1000);
