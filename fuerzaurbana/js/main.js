document.addEventListener('DOMContentLoaded', () => {

  // ===== Header on scroll =====
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== Mobile menu =====
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ===== Reveal on scroll =====
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ===== Active nav link =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-72px 0px -50% 0px' });
    sections.forEach(s => navObserver.observe(s));
  }

  // ===== Contact form =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('nombre');
      const email = document.getElementById('email');

      [name, email].forEach(field => field.closest('.form__group').classList.remove('has-error'));

      if (!name.value.trim()) {
        name.closest('.form__group').classList.add('has-error');
        valid = false;
      }
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.closest('.form__group').classList.add('has-error');
        valid = false;
      }

      if (valid) {
        const button = form.querySelector('button[type="submit"]');
        button.textContent = '¡Solicitud enviada!';
        button.disabled = true;
        form.reset();
        setTimeout(() => {
          button.textContent = 'Enviar solicitud';
          button.disabled = false;
        }, 2500);
      }
    });
  }

});
