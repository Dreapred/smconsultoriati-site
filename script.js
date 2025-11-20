// script_premium.js
// Esta versão adiciona funcionalidades premium ao site, incluindo
// alternância de tema (modo claro/escuro) e animações de entrada
// nos elementos marcados com o atributo data-animate.

document.addEventListener('DOMContentLoaded', () => {
  // Alternância de tema entre claro e escuro
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Atualiza o ícone de acordo com o tema atual
      if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
      } else {
        themeToggle.textContent = '🌙';
      }
    });
  }

  // Animações: usa IntersectionObserver para adicionar a classe
  // 'in-view' quando o elemento entra na viewport. Isto ativa
  // a transição CSS definida em style.css.
  const observerOptions = {
    threshold: 0.1,
  };
  const animateObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animate]').forEach(el => {
    animateObserver.observe(el);
  });
});