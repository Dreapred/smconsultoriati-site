document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.header');

  navToggle.addEventListener('click', function() {
    header.classList.toggle('nav-open');
  });

  // Atualiza ano no rodapé
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
