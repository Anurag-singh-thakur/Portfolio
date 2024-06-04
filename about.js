let contactOptions = document.querySelectorAll('.contact-options p');
let toggleContactButton = document.getElementById('toggleContact');
let currentContactIndex = 0;

// Hide all contact options except the first one (email)
contactOptions.forEach((option, index) => {
  if (index > 0) {
    option.style.display = 'none';
  }
});

toggleContactButton.addEventListener('click', () => {
  // Hide all contact options
  contactOptions.forEach((option) => {
    option.style.display = 'none';
  });

  // Show the next contact option
  contactOptions[currentContactIndex].style.display = 'inline-block';

  // Increment the index, wrapping around to 0 if necessary
  currentContactIndex = (currentContactIndex + 1) % contactOptions.length;
});