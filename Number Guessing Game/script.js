let min = 1;
let max = 100;
let attempts = 1;
let running = true;
let answer = Math.floor(Math.random() * max - min) + 1;
while (running) {
  let guess = window.prompt(`Enter the number`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert(`enter an valid number`);
  } else if (guess > max || guess < min) {
    window.alert(`enter an valid number`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`guess is lower `);
    } else if (guess > answer) {
      window.alert(`guess is higher`);
    } else {
      window.alert(`you guessed ${answer} in ${attempts} attempts`);
      running = false;
    }
  }
}
