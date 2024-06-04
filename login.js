/*pop up code*/
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

/* form validation code */

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginform");
    var usernameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var contactInput = document.getElementById("contact-number");
    var messageInput = document.getElementById("message");
    var submitButton = document.getElementById("submit");
  
    function validateForm() {
      var isValid = true;
      if (
        usernameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        contactInput.value.trim() === '' ||
        messageInput.value.trim() === ''
      ) {
        isValid = false;
      }
      submitButton.disabled = !isValid;
    }
  
    usernameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    contactInput.addEventListener("input", validateForm);
    messageInput.addEventListener("input", validateForm);
  
    validateForm();
  });
  