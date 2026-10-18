document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile Menu ----------
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const body = document.body;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !nav.classList.contains('open');
    hamburger.classList.toggle('active', isOpen);
    nav.classList.toggle('open', isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  document.querySelectorAll('.nav__link, .nav__cta-mobile').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close nav on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) toggleMenu(false);
  });

  // ---------- Testimonials Slider ----------
  const slider = document.getElementById('testimoniosSlider');
  const slides = slider.querySelectorAll('.testimonio-card');
  const prevBtn = document.getElementById('prevTestimonio');
  const nextBtn = document.getElementById('nextTestimonio');
  const dotsContainer = document.getElementById('testimoniosDots');
  let currentSlide = 0;
  let autoSlide;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAuto(); });

  function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  // Swipe support for mobile
  let touchStartX = 0;
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentSlide + 1);
      else goToSlide(currentSlide - 1);
      resetAuto();
    }
  }, { passive: true });

  resetAuto();

  // ---------- Form ----------
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const servicio = document.getElementById('servicio_interes').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    const text = encodeURIComponent(
      `Hola! Soy ${nombre}.\n` +
      `Email: ${email}\n` +
      `Tel: ${telefono}\n` +
      `Servicio: ${servicio || 'No especificado'}\n` +
      `${mensaje ? `Mensaje: ${mensaje}` : ''}`
    );

    const wa = `https://wa.me/525512345678?text=${text}`;

    const btn = form.querySelector('.btn--block');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      window.open(wa, '_blank');
      form.reset();
      btn.textContent = 'Enviado!';
      btn.style.background = '#10b981';
      btn.style.borderColor = '#10b981';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
      }, 2000);
    }, 600);
  });

  // ---------- Header scroll effect ----------
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 60
      ? '0 4px 24px rgba(10, 110, 158, 0.1)'
      : 'none';
  }, { passive: true });
});
