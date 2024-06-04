
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('.close-icon');

hamburgerIcon.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});
