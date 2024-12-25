const passwordBox = document.getElementById("Password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = " ~!@#$%^&*()_+?>><|;][ ";
const allchars = uppercase + lowercase + symbols + numbers;
function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (password.length < length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
