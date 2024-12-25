function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById("message").textContent = "Registration successful!";
  } else {
    document.getElementById("message").textContent =
      "Please fill out all fields.";
  }
}

function login() {
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    document.getElementById("message").textContent = "Login successful!";
    window.location.href = "secure.html";
  } else {
    document.getElementById("message").textContent =
      "Invalid username or password.";
  }
}

function logout() {
  window.location.href = "index.html";
}

function checkAccess() {
  const storedUsername = localStorage.getItem("username");
  if (!storedUsername) {
    window.location.href = "index.html";
  }
}
