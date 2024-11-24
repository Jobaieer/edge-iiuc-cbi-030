/*-- =======================================================
  * edge-iiuc-cbi-030 : Task-06
  * Main Js File
  * Written by Jobaieer
  ======================================================== 
  */
import "../css/main.css";
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  //Username Validation
  if (email.value.length > 5) {
    success(email);
  } else {
    error(email);
  }

  //Password Validation
  if (password.value.length > 6) {
    success(password);
  } else {
    error(password);
  }
});

function error(element) {
  element.style.border = "1px solid tomato";
}

function success(element) {
  element.style.border = "1px solid green";
}

const validEmail = "admin@jobaieer.com";
const validPassword = "12345678";

//Login Validation
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Check if the entered email and password are correct
  if (email === validEmail && password === validPassword) {
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    // Display error message
    errorMessage.textContent = "Invalid email or password!.";
  }
});
