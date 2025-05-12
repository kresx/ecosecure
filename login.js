function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const validUsername = "krish";
  const validPassword = "krs2801";

  if (username === validUsername && password === validPassword) {
    if (document.getElementById("rememberMe").checked) {
      localStorage.setItem("eco_user", username);
    }
    window.location.href = "index1.html";
  } else {
    error.textContent = "Invalid username or password.";
  }

  return false;
}
