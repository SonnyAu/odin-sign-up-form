let password = "";
let confirmPassword = "";
function checkPassword() {
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirm-password").value;
  console.log(password);
  console.log(confirmPassword);
  if (confirmPassword !== password) {
    document.getElementById("password").classList.add("error");
    document.getElementById("confirm-password").classList.add("error");
    document.getElementById("passwordError").textContent =
      "* Passwords do not match";
    document.getElementById("confirmPasswordError").textContent =
      "* Passwords do not match";
  } else {
    document.getElementById("password").classList.remove("error");
    document.getElementById("confirm-password").classList.remove("error");
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
  }
}
