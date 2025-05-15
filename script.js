
// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('donationForm');
  const message = document.getElementById('confirmationMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      message.style.display = 'block';
    });
  }
});
