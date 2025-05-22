// script.js untuk Bone Jus Buah

// Fungsi untuk filter kategori menu jus buah
const filterButtons = document.querySelectorAll('.filter-menu button');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update aria-checked untuk aksesibilitas
    filterButtons.forEach(btn => btn.setAttribute('aria-checked', 'false'));
    button.setAttribute('aria-checked', 'true');

    const category = button.getAttribute('data-category');

    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Toggle info nutrisi pada setiap produk
const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const controlsId = btn.getAttribute('aria-controls');
    const info = document.getElementById(controlsId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      info.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      info.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Animasi scroll sederhana menggunakan Intersection Observer
const observerOptions = {
  threshold: 0.1
};

const fadeInElements = document.querySelectorAll('.menu-item, #testimoni, #about, #kontak');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInElements.forEach(el => observer.observe(el));
