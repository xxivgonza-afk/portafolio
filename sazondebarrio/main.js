const menuData = [
  {
    day: 0, platos: [
      {
        nombre: 'Bandera Dominicana', desc: 'Arroz blanco, habichuelas guisadas, carne de res, ensalada y tostones.',
        precio: 280, imagen: 'assets/images/comida-1.jpg',
        tag: '⭐ Plato estrella',
        concepto: 'El plato más representativo de la cocina dominicana. Una combinación perfecta de sabores y texturas que representa la bandera nacional: arroz blanco esponjoso, habichuelas cremosas guisadas con sazón criolla, carne de res jugosa, ensalada fresca y tostones dorados.',
        ingredientes: ['Arroz blanco', 'Habichuelas rojas', 'Carne de res', 'Ensalada', 'Tostones', 'Sazón criolla', 'Ajo', 'Cebolla', 'Aceite de oliva']
      },
      {
        nombre: 'Mofongo con Camarones', desc: 'Mofongo de plátano verde con camarones al ajillo y aguacate.',
        precio: 350, imagen: 'assets/images/plato-camarones-mofongo.jpg',
        tag: '🍤 Especialidad',
        concepto: 'Nuestro mofongo se prepara con plátano verde frito, machacado con ajo, chicharrón y bañado en una salsa de camarones salteados al ajillo. Servido con aguacate fresco y una rodaja de limón. La textura crujiente por fuera y suave por dentro lo hace irresistible.',
        ingredientes: ['Plátano verde', 'Camarones', 'Ajo', 'Chicharrón', 'Aguacate', 'Limón', 'Aceite de oliva', 'Sal']
      },
      {
        nombre: 'Sancocho de Siete Carnes', desc: 'Sancocho tradicional con siete tipos de carne, yuca, plátano y ñame.',
        precio: 320, imagen: 'assets/images/plato-estofado.jpg',
        tag: '🥣 Tradición',
        concepto: 'El sancocho es el rey de los caldos dominicanos. Este lleva siete carnes distintas: res, cerdo, pollo, chivo, longaniza, costilla y pato, cocidas a fuego lento con yuca, plátano, ñame, auyama y sazón de hierbas frescas. Se sirve con arroz blanco, aguacate y un toque de limón.',
        ingredientes: ['Carne de res', 'Cerdo', 'Pollo', 'Chivo', 'Longaniza', 'Costilla', 'Pato', 'Yuca', 'Plátano', 'Ñame', 'Auyama', 'Hierbas frescas']
      },
    ]
  },
  {
    day: 1, platos: [
      {
        nombre: 'Mangú con Los Tres Golpes', desc: 'Mangú de plátano, salami frito, queso frito y huevo revuelto.',
        precio: 250, imagen: 'assets/images/plato-mangú.jpg',
        tag: '🌅 Clásico matutino',
        concepto: 'El desayuno dominicano por excelencia. Nuestro mangú se prepara con plátanos verdes hervidos y machacados con mantequilla y un toque de aceite de oliva. Acompañado de los famosos "tres golpes": salami frito, queso blanco frito y huevo revuelto con cebolla. Una explosión de sabor para empezar el día.',
        ingredientes: ['Plátano verde', 'Salami dominicano', 'Queso blanco', 'Huevos', 'Cebolla', 'Mantequilla', 'Aceite de oliva']
      },
      {
        nombre: 'Pollo Guisado', desc: 'Pollo guisado en salsa criolla con arroz moro y maduros.',
        precio: 290, imagen: 'assets/images/plato-pollo.jpg',
        tag: '🍗 Casero',
        concepto: 'El pollo guisado de la abuela: piezas de pollo fresco selladas y cocinadas a fuego lento en una salsa criolla de tomate, cebolla, ajo, pimiento y especias dominicanas. Servido con arroz moro (arroz con habichuelas) y maduros fritos bien caramelizados.',
        ingredientes: ['Pollo fresco', 'Arroz', 'Habichuelas', 'Maduros', 'Tomate', 'Cebolla', 'Ajo', 'Pimiento', 'Especias criollas']
      },
      {
        nombre: 'Pescado Frito', desc: 'Pescado frito entero con tostones, ensalada y arroz.',
        precio: 380, imagen: 'assets/images/plato-pescado.jpg',
        tag: '🐟 Frescura del día',
        concepto: 'Pescado fresco de la costa, sazonado con ajo, limón y especias dominicanas, luego frito hasta quedar crujiente por fuera y jugoso por dentro. Servido entero con arroz blanco, ensalada fresca y tostones dorados. Acompañado de nuestra salsa tártara casera.',
        ingredientes: ['Pescado fresco', 'Arroz blanco', 'Ensalada', 'Tostones', 'Ajo', 'Limón', 'Especias', 'Salsa tártara']
      },
    ]
  },
  {
    day: 2, platos: [
      {
        nombre: 'Chicharrón de Pollo', desc: 'Chicharrón de pollo crocante con arroz, habichuelas y ensalada.',
        precio: 290, imagen: 'assets/images/plato-chicharron.jpg',
        tag: '🔥 Crocante',
        concepto: 'Piezas de pollo marinadas en ajo, limón y especias, luego rebozadas y fritas hasta lograr ese característico acabado crocante que las hace famosas. Servidas con arroz blanco, habichuelas guisadas y ensalada fresca. Nuestro secreto: la marinación de 24 horas.',
        ingredientes: ['Pollo', 'Ajo', 'Limón', 'Especias criollas', 'Harina', 'Arroz blanco', 'Habichuelas', 'Ensalada']
      },
      {
        nombre: 'Yaroa Mixta', desc: 'Yaroa con carne, pollo, queso, mayonesa, kétchup y salsa rosada.',
        precio: 300, imagen: 'assets/images/plato-yaroa.jpg',
        tag: '🥩 Street food',
        concepto: 'La yaroa es un plato callejero dominicano que se ha ganado el corazón de todos. Consiste en una base de papas fritas o plátano maduro frito, cubierta con una capa generosa de carne y pollo desmechado, bañada en salsa rosada, kétchup, mayonesa y una lluvia de queso rallado. Se gratina al horno para fundir el queso.',
        ingredientes: ['Papas fritas', 'Carne desmechada', 'Pollo desmechado', 'Queso rallado', 'Salsa rosada', 'Kétchup', 'Mayonesa']
      },
      {
        nombre: 'Locrio de Pollo', desc: 'Arroz locrio con pollo, verduras y aceitunas.',
        precio: 310, imagen: 'assets/images/plato-arroz.jpg',
        tag: '🍚 Arroz con historia',
        concepto: 'El locrio es primo hermano de la paella. Arroz cocinado directamente en el caldo de pollo con verduras salteadas, aceitunas, alcaparras y pasas. El resultado es un arroz suelto, lleno de sabor y con una textura perfecta. Se sirve con ensalada y tostones.',
        ingredientes: ['Arroz', 'Pollo', 'Verduras mixtas', 'Aceitunas', 'Alcaparras', 'Pasas', 'Ajo', 'Cebolla', 'Pimiento']
      },
    ]
  },
  {
    day: 3, platos: [
      {
        nombre: 'La Bandera Vegetariana', desc: 'Arroz, habichuelas, ensalada, aguacate y tostones.',
        precio: 250, imagen: 'assets/images/plato-bandera-veg.jpg',
        tag: '🌱 Opción saludable',
        concepto: 'Nuestra versión vegetariana de la bandera dominicana mantiene la esencia del plato tradicional pero sin proteína animal. Arroz blanco, habichuelas guisadas en una base de sofrito criollo, ensalada fresca, aguacate cremoso y tostones crujientes. Un plato ligero pero contundente.',
        ingredientes: ['Arroz blanco', 'Habichuelas', 'Ensalada', 'Aguacate', 'Tostones', 'Sofrito criollo', 'Cilantro']
      },
      {
        nombre: 'Moro de Guandules', desc: 'Arroz moro con guandules, carne de cerdo, ensalada y maduros.',
        precio: 320, imagen: 'assets/images/plato-gandules.jpg',
        tag: '🇩🇴 Tradicional',
        concepto: 'El moro de guandules es un arroz cocinado con guandules verdes, coco y especias, dándole un color y sabor únicos. Acompañado de carne de cerdo guisada en salsa criolla, ensalada fresca y maduros fritos. Es un plato festivo que no puede faltar en Navidad pero que aquí disfrutas cualquier día.',
        ingredientes: ['Arroz', 'Guandules verdes', 'Leche de coco', 'Carne de cerdo', 'Maduros', 'Ensalada', 'Cilantro', 'Ajo']
      },
      {
        nombre: 'Pastelón de Plátano', desc: 'Pastelón de plátano maduro con carne molida y queso gratinado.',
        precio: 280, imagen: 'assets/images/plato-lasana.jpg',
        tag: '🧀 Al horno',
        concepto: 'Un pastelón es como una lasaña dominicana: capas de plátano maduro frito intercaladas con carne molida guisada, queso mozzarella y un toque de salsa de tomate. Se gratina al horno hasta que el queso burbujea y se dora. Servido con ensalada fresca.',
        ingredientes: ['Plátano maduro', 'Carne molida', 'Queso mozzarella', 'Salsa de tomate', 'Cebolla', 'Ajo', 'Pimiento', 'Aceitunas']
      },
    ]
  },
  {
    day: 4, platos: [
      {
        nombre: 'Chivo Guisado', desc: 'Chivo guisado en hierbas con arroz blanco, habichuelas y ensalada.',
        precio: 350, imagen: 'assets/images/plato-estofado.jpg',
        tag: '🥩 Sabor del campo',
        concepto: 'El chivo guisado es un plato de origen campesino que requiere paciencia y cariño. La carne de chivo se marina con hierbas aromáticas, ajo, cebolla y naranja agria, luego se cocina a fuego lento hasta que está tan tierna que se deshace. Servido con arroz blanco, habichuelas guisadas y ensalada.',
        ingredientes: ['Carne de chivo', 'Ajo', 'Cebolla', 'Naranja agria', 'Hierbas aromáticas', 'Arroz blanco', 'Habichuelas', 'Ensalada']
      },
      {
        nombre: 'Tostones Rellenos', desc: 'Tostones rellenos de camarón, pollo o mixtos con ensalada.',
        precio: 310, imagen: 'assets/images/plato-tostones.jpg',
        tag: '🥟 Bocado criollo',
        concepto: 'Tostones en forma de concha rellenos con tu elección: camarones al ajillo, pollo guisado desmechado o una mezcla de ambos. Se cubren con ensalada de repollo, salsa rosada y queso rallado. El contraste entre el tostón crujiente y el relleno jugoso es simplemente espectacular.',
        ingredientes: ['Plátano verde', 'Camarones', 'Pollo', 'Repollo', 'Salsa rosada', 'Queso rallado', 'Ajo', 'Limón']
      },
      {
        nombre: 'Arroz con Pollo', desc: 'Arroz con pollo al estilo dominicano, con vegetales y sazón criolla.',
        precio: 290, imagen: 'assets/images/plato-pollo.jpg',
        tag: '🍗 Favorito de todos',
        concepto: 'El arroz con pollo dominicano se cocina en una sola olla, absorbiento todos los sabores del pollo, las verduras y el sazón criollo. Usamos muslos y contramuslos para garantizar jugosidad, y lo acompañamos con habichuelas guisadas, ensalada y aguacate.',
        ingredientes: ['Arroz', 'Pollo', 'Vegetales', 'Sazón criolla', 'Habichuelas', 'Ensalada', 'Aguacate', 'Ajo', 'Cebolla']
      },
    ]
  },
  {
    day: 5, platos: [
      {
        nombre: 'Bandera Dominical', desc: 'La bandera completa con carne guisada, arroz, habichuelas, ensalada y aguacate.',
        precio: 300, imagen: 'assets/images/comida-1.jpg',
        tag: '⭐ La completa',
        concepto: 'Nuestra bandera dominical es la versión más generosa del plato típico dominicano. Carne de res guisada lentamente en salsa criolla, arroz blanco perfectamente graneadito, habichuelas rojas cremosas, ensalada fresca y aguacate. El plato que sabe a domingo en casa de la abuela.',
        ingredientes: ['Carne de res', 'Arroz blanco', 'Habichuelas rojas', 'Ensalada', 'Aguacate', 'Tostones', 'Sazón criolla']
      },
      {
        nombre: 'Mofongo Relleno', desc: 'Mofongo relleno de camarones o pollo en salsa criolla.',
        precio: 370, imagen: 'assets/images/plato-camarones-mofongo.jpg',
        tag: '🍤 El favorito',
        concepto: 'Una bola de mofongo de plátano verde rellena con camarones salteados en mantequilla de ajo o pollo guisado desmechado, bañada en salsa criolla caliente. La combinación del mofongo crujiente con el relleno jugoso y la salsa es sencillamente celestial.',
        ingredientes: ['Plátano verde', 'Camarones', 'Pollo', 'Mantequilla de ajo', 'Salsa criolla', 'Chicharrón', 'Aceite de oliva']
      },
      {
        nombre: 'Pernil Asado', desc: 'Pernil de cerdo asado lento con arroz, habichuelas y ensalada.',
        precio: 390, imagen: 'assets/images/plato-pernil.jpg',
        tag: '🥇 Plato estrella del sábado',
        concepto: 'Nuestro pernil se marina por 48 horas con ajo, orégano, naranja agria y especias secretas, luego se asa lentamente durante horas hasta que la piel queda crujiente y la carne se desprende del hueso. Servido con arroz blanco, habichuelas guisadas y ensalada. El plato más esperado de la semana.',
        ingredientes: ['Pernil de cerdo', 'Ajo', 'Orégano', 'Naranja agria', 'Arroz blanco', 'Habichuelas', 'Ensalada', 'Especias secretas']
      },
    ]
  },
];

const menuGrid = document.getElementById('menuGrid');
const dayButtons = document.querySelectorAll('.menu__day-btn');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems = document.querySelectorAll('.galeria__item img');

const modal = document.getElementById('dishModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTag = document.getElementById('modalTag');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalConcepto = document.getElementById('modalConcepto');
const modalIngredientes = document.getElementById('modalIngredientes');
const modalWhatsApp = document.getElementById('modalWhatsApp');

function renderMenu(dayIndex) {
  const dayData = menuData.find(d => d.day === dayIndex) || menuData[0];
  menuGrid.innerHTML = dayData.platos.map((plato, i) => `
    <div class="menu__card" data-plato="${dayIndex}-${i}" style="opacity:0;transform:translateY(30px);transition:opacity 0.5s ease, transform 0.5s ease">
      <div class="menu__card-img">
        <img src="${plato.imagen}" alt="${plato.nombre}" loading="lazy">
      </div>
      <div class="menu__card-body">
        <h3 class="menu__card-title">${plato.nombre}</h3>
        <p class="menu__card-desc">${plato.desc}</p>
        <span class="menu__card-price">RD$${plato.precio}</span>
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    document.querySelectorAll('.menu__card').forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 100);
    });
  }, 50);

  document.querySelectorAll('.menu__card').forEach(card => {
    card.addEventListener('click', () => {
      const [day, idx] = card.dataset.plato.split('-').map(Number);
      const plato = menuData.find(d => d.day === day).platos[idx];
      openModal(plato);
    });
  });
}

function openModal(plato) {
  modalImage.src = plato.imagen;
  modalImage.alt = plato.nombre;
  modalTag.textContent = plato.tag || 'Plato del día';
  modalName.textContent = plato.nombre;
  modalPrice.textContent = `RD$${plato.precio}`;
  modalDesc.textContent = plato.desc;
  modalConcepto.textContent = plato.concepto;
  modalIngredientes.innerHTML = plato.ingredientes.map(i => `<span>${i}</span>`).join('');
  modalWhatsApp.href = `https://wa.me/18091234567?text=¡Hola!%20Quiero%20pedir%20${encodeURIComponent(plato.nombre)}%20(RD$${plato.precio})`;
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeLightbox();
  }
});

dayButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    dayButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(parseInt(btn.dataset.day));
  });
});

renderMenu(0);

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('nav--scrolled', window.scrollY > 100);

  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
