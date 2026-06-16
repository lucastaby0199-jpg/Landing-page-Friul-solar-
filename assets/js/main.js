document.addEventListener('DOMContentLoaded', () => {

  /* ─── Mobile nav toggle ─── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

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

  /* ─── Hero zoom: one-directional, resets when leaving viewport ─── */
  const heroSection = document.getElementById('top');
  const heroPhoto   = document.querySelector('.hero__photo');

  function startHeroZoom() {
    if (!heroPhoto) return;
    heroPhoto.style.animation = 'none';
    heroPhoto.offsetHeight; // force reflow to restart
    heroPhoto.style.animation = 'heroZoom 20s linear forwards';
  }

  function stopHeroZoom() {
    if (!heroPhoto) return;
    heroPhoto.style.animation = 'none';
  }

  if (heroSection && heroPhoto) {
    const zoomObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startHeroZoom();
          } else {
            stopHeroZoom();
          }
        });
      },
      { threshold: 0.15 }
    );
    zoomObserver.observe(heroSection);
  }

  /* ─── Lead form ─── */
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
