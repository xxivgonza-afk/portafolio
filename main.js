document.addEventListener('DOMContentLoaded', () => {

  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const isMobile = window.innerWidth < 768;

  // ===== Loading Screen =====
  const loading = document.getElementById('loading');
  const loadingBar = document.getElementById('loadingBar');
  let loadProgress = 0;
  document.body.style.overflow = 'hidden';

  const loadInterval = setInterval(() => {
    loadProgress = Math.min(loadProgress + Math.random() * 12 + 4, 100);
    loadingBar.style.width = loadProgress + '%';
    if (loadProgress >= 100) {
      clearInterval(loadInterval);
      requestAnimationFrame(() => {
        loading.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }
  }, 100);

  // ===== Theme =====
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ===== Particle Canvas =====
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let canvasAnimId = null;
  let canvasVisible = true;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (!isTouch) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
        }
      }
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`;
      ctx.fill();
    }
  }

  const particleCount = isMobile ? 20 : Math.min(50, Math.floor(canvas.width * canvas.height / 18000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 22500) {
          const d = Math.sqrt(dist);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - d / 150) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    drawConnections();
    canvasAnimId = requestAnimationFrame(animateCanvas);
  }

  // Pause canvas when not visible
  const canvasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      canvasVisible = entry.isIntersecting;
      if (canvasVisible) {
        if (!canvasAnimId) animateCanvas();
      } else {
        if (canvasAnimId) {
          cancelAnimationFrame(canvasAnimId);
          canvasAnimId = null;
        }
      }
    });
  }, { threshold: 0 });
  canvasObserver.observe(canvas);

  animateCanvas();

  if (!isTouch) {
    let mouseRaf = null;
    document.addEventListener('mousemove', e => {
      if (!mouseRaf) {
        mouseRaf = requestAnimationFrame(() => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          mouseRaf = null;
        });
      }
    }, { passive: true });
  }

  // ===== Custom Cursor =====
  if (!isTouch) {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.add('hidden');
      follower.classList.add('hidden');
    });

    document.addEventListener('mouseenter', () => {
      cursor.classList.remove('hidden');
      follower.classList.remove('hidden');
    });

    const hoverTargets = document.querySelectorAll(
      'a, button, .btn, .proyecto-card, .contacto__card, .nav-indicator__dot, .servicio-card, .proyectos__filter-btn, .testimonios__arrow, .testimonios__dots span, .modal__close'
    );
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('hover'));
      el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
    });
  }

  // ===== Typewriter =====
  const typewriterText = document.getElementById('typewriterText');
  const cursorEl = document.getElementById('typewriterCursor');
  const phrases = [
    'Construyo experiencias digitales que dejan huella.',
    'Transformo ideas en código con personalidad.',
    'Diseño y desarrollo front-end con pasión.',
    'Creo interfaces que se sienten vivas.'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout;

  function typewrite() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      typewriterText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        typeTimeout = setTimeout(typewrite, 2500);
        return;
      }
      typeTimeout = setTimeout(typewrite, 40 + Math.random() * 30);
    } else {
      typewriterText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeTimeout = setTimeout(typewrite, 500);
        return;
      }
      typeTimeout = setTimeout(typewrite, 20 + Math.random() * 20);
    }
  }

  setTimeout(typewrite, 1500);

  // ===== Scroll Handlers (debounced) =====
  const progressBar = document.getElementById('progressBar');
  const shapes = document.querySelectorAll('.shape');
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');
  let lastScroll = 0;
  let scrollRaf = null;

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;
    progressBar.style.width = progress + '%';
    shapes.forEach((s, i) => { s.style.transform = `translateY(${scrollY * (0.05 + i * 0.02)}px)`; });
    if (scrollY > lastScroll && scrollY > 100) nav.classList.add('nav--hidden');
    else nav.classList.remove('nav--hidden');
    nav.classList.toggle('nav--solid', scrollY > 300);
    backToTop.classList.toggle('visible', scrollY > 500);
    lastScroll = scrollY;
    scrollRaf = null;
  }

  window.addEventListener('scroll', () => {
    if (!scrollRaf) scrollRaf = requestAnimationFrame(onScroll);
  }, { passive: true });

  // ===== Scroll Reveal =====
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ===== Animated Counters =====
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          el.textContent = current;
        }, 40);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ===== Skill Bars =====
  const skillBars = document.querySelectorAll('.skill-bar__fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===== Project Filter =====
  const filterBtns = document.querySelectorAll('.proyectos__filter-btn');
  const projectCards = document.querySelectorAll('.proyecto-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const tags = card.dataset.tags;
          if (tags && tags.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });

  // ===== Project Modal =====
  const projectData = JSON.parse(document.getElementById('projectData').textContent);
  const modal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalLive = document.getElementById('modalLive');

  function openModal(index) {
    const data = projectData[index];
    modalImg.innerHTML = `<img src="${data.image}" alt="${data.title}">`;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalTags.innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');
    modalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    modalLive.href = data.live;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.project)));
  });

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ===== Testimonials Slider =====
  const track = document.getElementById('testimoniosTrack');
  if (track) {
    const prevBtn = document.getElementById('testPrev');
    const nextBtn = document.getElementById('testNext');
    const dotsContainer = document.getElementById('testDots');
    const testimonioCards = track.querySelectorAll('.testimonio-card');
    let currentTest = 0;
    const totalTest = testimonioCards.length;

    for (let i = 0; i < totalTest; i++) {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToTest(i));
      dotsContainer.appendChild(dot);
    }

    function goToTest(index) {
      currentTest = index;
      track.style.transform = `translateX(-${currentTest * 100}%)`;
      dotsContainer.querySelectorAll('span').forEach((d, i) => {
        d.classList.toggle('active', i === currentTest);
      });
    }

    prevBtn.addEventListener('click', () => {
      currentTest = (currentTest - 1 + totalTest) % totalTest;
      goToTest(currentTest);
    });

    nextBtn.addEventListener('click', () => {
      currentTest = (currentTest + 1) % totalTest;
      goToTest(currentTest);
    });

    // Auto-play
    let testInterval = setInterval(() => {
      currentTest = (currentTest + 1) % totalTest;
      goToTest(currentTest);
    }, 5000);

    track.addEventListener('mouseenter', () => clearInterval(testInterval));
    track.addEventListener('mouseleave', () => {
      testInterval = setInterval(() => {
        currentTest = (currentTest + 1) % totalTest;
        goToTest(currentTest);
      }, 5000);
    });
  }

  // ===== Copy to Clipboard =====
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast('¡Copiado!');
      } catch {
        showToast('Error al copiar');
      }
    });
  });

  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ===== Form Validation =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('formName');
      const email = document.getElementById('formEmail');
      const message = document.getElementById('formMessage');

      [name, email, message].forEach(f => f.classList.remove('error'));

      if (!name.value.trim()) {
        name.classList.add('error');
        valid = false;
      }

      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      if (!message.value.trim()) {
        message.classList.add('error');
        valid = false;
      }

      if (valid) {
        showToast('¡Mensaje enviado! Te responderé pronto.');
        form.reset();
      } else {
        showToast('Corrige los campos marcados');
      }
    });
  }

  // ===== Back to Top =====
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Nav Indicator =====
  const dots = document.querySelectorAll('.nav-indicator__dot');
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dots.forEach(d => d.classList.remove('active'));
        const active = document.querySelector(`.nav-indicator__dot[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const section = document.getElementById(dot.dataset.section);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ===== Keyboard Shortcuts =====
  document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '4') {
      const sections = ['hero', 'sobre-mi', 'skills', 'proyectos'];
      const index = parseInt(e.key) - 1;
      if (sections[index]) {
        const el = document.getElementById(sections[index]);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (e.key === 't' || e.key === 'T') {
      themeToggle.click();
    }
  });

  // ===== Mobile Nav Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('nav__list--open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('nav__list--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ===== 3D Tilt =====
  if (!isTouch) {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        const inner = card.querySelector('.proyecto-card__inner');
        if (inner) {
          inner.style.transform =
            `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.proyecto-card__inner');
        if (inner) {
          inner.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0)';
        }
      });
    });
  }

});
