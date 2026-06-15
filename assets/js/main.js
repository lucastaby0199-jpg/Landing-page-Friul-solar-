document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.classList.toggle('is-active', isOpen);
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-active');
    });
  });

  const form = document.getElementById('leadForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    alert('Grazie! La tua richiesta è stata inviata. Ti contatteremo a breve.');
    form.reset();
  });
});
