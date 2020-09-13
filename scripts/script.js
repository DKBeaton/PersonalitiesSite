const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const mobileLinks = document.querySelectorAll('.mobile-item');

overlay.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

