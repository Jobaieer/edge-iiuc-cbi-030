/*-- =======================================================
  * edge-iiuc-cbi-030 : Task-06
  * Dashboard Js File
  * Written by Jobaieer
  ======================================================== 
  */

let totalTaka = 100;

// Function for Update dashboard with total taka
function updateDashboard() {
  document.querySelector(".totalTaka").textContent = totalTaka + "৳";
}

// Deposit Taka Function
function deposit() {
  const depositTaka = parseFloat(document.getElementById("depositTaka").value);

  if (isNaN(depositTaka) || depositTaka <= 0) {
    alert("Enter a valid deposit amount.");
    return;
  }

  // Update the total balance
  totalTaka += depositTaka;

  // Update the dashboard
  updateDashboard();

  // Clear the input field
  document.getElementById("depositTaka").value = "";
}

// Withdraw Taka Function
function withdraw() {
  const withdrawTaka = parseFloat(
    document.querySelector("#withdrawTaka").value
  );

  if (isNaN(withdrawTaka) || withdrawTaka <= 0) {
    alert("Enter a valid withdrawal amount.");
    return;
  }

  if (withdrawTaka > totalTaka) {
    alert("Insufficient Taka for this withdrawal.");
    return;
  }

  // Update the total balance
  totalTaka -= withdrawTaka;

  // Update the dashboard
  updateDashboard();

  // Clear the input field
  document.getElementById("withdrawTaka").value = "";
}

// Initialize the dashboard on page load
updateDashboard();
