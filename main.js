// AnimeLab - My Hero Academia JavaScript

document.addEventListener('DOMContentLoaded', function(){
  // ========== ELEMENTOS PRINCIPALES ==========
  const themeBtn = document.getElementById('themeBtn');
  const body = document.body;
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const form = document.getElementById('contactForm');

  // Elementos modales
  const profileModal = document.getElementById('profileModal');
  const newsModal = document.getElementById('newsModal');
  const aboutSection = document.getElementById('aboutContent');
  const toggleAboutBtn = document.getElementById('toggleAboutBtn');
  
  // Elementos de audio
  const music = document.getElementById('backgroundMusic');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  let isPlaying = false;

  // ========== DATOS DE PERSONAJES (MHA) ==========
  const bio = {
    'Midoriya': {
      title: 'Izuku Midoriya (Deku)',
      info: 'El noveno portador de One For All. Su viaje se centra en dominar este poder inmenso y convertirse en el mejor héroe.',
      origin: 'My Hero Academia'
    },
    'Bakugo': {
      title: 'Katsuki Bakugo (Dynamight)',
      info: 'Rival de Midoriya con un Quirk de explosiones devastadoras. Sueña con superar a All Might y ser el héroe número uno.',
      origin: 'My Hero Academia'
    },
    'Todoroki': {
      title: 'Shoto Todoroki',
      info: 'Estudiante con la habilidad de Half-Cold Half-Hot. Lucha por superar el legado de su padre Endeavor y forjar su propio camino.',
      origin: 'My Hero Academia'
    },
    'Uraraka': {
      title: 'Ochako Uraraka (Uravity)',
      info: 'Heroína con la capacidad de hacer que los objetos floten al tocarlos (Zero Gravity). Motivada por ayudar a su familia.',
      origin: 'My Hero Academia'
    }
  };

  // ========== DATOS DE NOTICIAS ==========
  const newsData = {
    'MHA-7': {
      title: '¡Nueva temporada de My Hero Academia!',
      date: '15/09/2025',
      content: 'La tan esperada séptima temporada se centrará en el arco final del manga. Se prometen batallas épicas y revelaciones clave sobre el destino de los héroes. Estreno mundial confirmado para Diciembre de 2025.'
    },
    'Mirko': {
      title: 'Detalles del spin-off de Mirko',
      date: '01/10/2025',
      content: 'La serie explorará los años de formación de Mirko, Rumi Usagiyama, antes de convertirse en una de las heroínas más fuertes de Japón. Veremos sus primeras misiones y cómo desarrolló su estilo de combate. Se estrena en primavera de 2026.'
    },
    'Horikoshi': {
      title: 'Entrevista a Kohei Horikoshi',
      date: '25/10/2025',
      content: 'El mangaka compartió sus sentimientos sobre el inminente final de la serie y agradeció el apoyo de los fans por más de una década. Reveló algunos secretos detrás de escena sobre el desarrollo de los personajes principales.'
    }
  };

  // ========== FUNCIONES DE MODALES ==========
  
  // Mostrar modal de perfil de personaje
  window.showProfile = function(name) {
    const data = bio[name];
    if (data) {
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalInfo').textContent = data.info;
      document.getElementById('modalOrigin').textContent = data.origin;
      
      profileModal.style.display = 'flex';
      setTimeout(() => profileModal.classList.add('show'), 10);
    }
  };

  // Cerrar modal de perfil
  window.closeProfileModal = function() {
    profileModal.classList.remove('show');
    setTimeout(() => profileModal.style.display = 'none', 300);
  };

  // Mostrar modal de noticias
  window.showNewsModal = function(id) {
    const data = newsData[id];
    if (data) {
      document.getElementById('newsModalTitle').textContent = data.title;
      document.getElementById('newsModalDate').textContent = `Fecha: ${data.date}`;
      document.getElementById('newsModalContent').textContent = data.content;
      
      newsModal.style.display = 'flex';
      setTimeout(() => newsModal.classList.add('show'), 10);
    }
  };

  // Cerrar modal de noticias
  window.closeNewsModal = function() {
    newsModal.classList.remove('show');
    setTimeout(() => newsModal.style.display = 'none', 300);
  };
  
  // ========== MODO OSCURO/CLARO (CORREGIDO) ==========
  
  // Cargar tema guardado
  const currentTheme = localStorage.getItem('animelab-theme');
  if (currentTheme === 'light') {
    body.classList.add('light');
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }

  // Cambiar tema
  themeBtn.addEventListener('click', function() {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('animelab-theme', isLight ? 'light' : 'dark');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
    
    // Feedback visual
    themeBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      themeBtn.style.transform = 'rotate(0deg)';
    }, 300);
  });

  // ========== NAVEGACIÓN RESPONSIVA ==========
  
  // Toggle menú hamburguesa
  navToggle.addEventListener('click', function() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('show');
  });

  // Cerrar menú al hacer clic en un enlace
  navList.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 720 && navList.classList.contains('show')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('show');
      }
    });
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navList.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navList.classList.contains('show')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('show');
    }
  });

  // ========== VALIDACIÓN DE FORMULARIO ==========
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  function validateInput(input) {
    const value = input.value.trim();
    const parent = input.parentElement;
    let errorMessage = parent.querySelector('.error-message');

    // Limpiar clases previas
    input.classList.remove('error', 'success');
    if (errorMessage) errorMessage.remove();

    // Validar campo vacío
    if (value === '') {
      input.classList.add('error');
      errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      errorMessage.textContent = `El campo ${input.name} no puede estar vacío.`;
      parent.appendChild(errorMessage);
      return false;
    }

    // Validar email
    if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      input.classList.add('error');
      errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      errorMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
      parent.appendChild(errorMessage);
      return false;
    }

    // Validación exitosa
    input.classList.add('success');
    return true;
  }

  // Validación en tiempo real
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
  });

  // Validación al enviar formulario
  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    
    const isValid = [nameInput, emailInput, messageInput].every(validateInput);

    // Remover mensaje de éxito anterior
    const oldSuccess = form.querySelector('.success-message');
    if (oldSuccess) oldSuccess.remove();

    if (isValid) {
      // Mostrar mensaje de éxito
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = `¡Gracias, ${nameInput.value}! Tu mensaje ha sido recibido. ¡Plus Ultra! 💪`;
      form.prepend(successMessage);
      
      // Limpiar formulario
      setTimeout(() => {
        form.reset();
        [nameInput, emailInput, messageInput].forEach(input => {
          input.classList.remove('success', 'error');
        });
        successMessage.remove();
      }, 4000);
    }
  });

  // ========== PIE DE PÁGINA DINÁMICO ==========
  
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // ========== AUDIO/MÚSICA (CORREGIDO) ==========
  
  audioToggleBtn.addEventListener('click', function() {
    if (isPlaying) {
      music.pause();
      audioToggleBtn.textContent = '🔇';
      audioToggleBtn.title = 'Reproducir música';
    } else {
      // Intentar reproducir
      music.play().then(() => {
        audioToggleBtn.textContent = '🔊';
        audioToggleBtn.title = 'Pausar música';
        isPlaying = true;
      }).catch(error => {
        console.log('Error al reproducir audio:', error);
        alert('No se pudo reproducir el audio. Asegúrate de tener el archivo op.mp3 en la carpeta assets/');
        isPlaying = false;
      });
    }
    isPlaying = !isPlaying;
  });

  // Actualizar estado cuando el audio termine
  music.addEventListener('ended', function() {
    isPlaying = false;
    audioToggleBtn.textContent = '🔇';
  });

  // Manejar errores de carga de audio
  music.addEventListener('error', function(e) {
    console.error('Error al cargar el audio:', e);
    audioToggleBtn.textContent = '❌';
    audioToggleBtn.title = 'Audio no disponible';
  });

  // ========== SECCIÓN "ACERCA DE" ==========
  
  toggleAboutBtn.addEventListener('click', function() {
    const isVisible = aboutSection.classList.contains('visible');
    aboutSection.classList.toggle('visible');
    toggleAboutBtn.textContent = isVisible ? 'Mostrar Información' : 'Ocultar Información';
  });

  // ========== LIGHTBOX PARA GALERÍA ==========
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  window.openLightbox = function(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  };

  window.closeLightbox = function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  };

  // Cerrar lightbox con tecla ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      lightbox.style.display = 'none';
      closeProfileModal();
      closeNewsModal();
    }
  });

  // ========== BOTÓN DE PISTA (INTERACCIÓN JS) ==========
  
  const showHintBtn = document.getElementById('showHint');
  if (showHintBtn) {
    showHintBtn.addEventListener('click', function() {
      alert('💡 Pista: Explora el código en main.js para ver cómo funcionan las animaciones y el cambio de tema. ¡Plus Ultra!');
    });
  }

  // ========== EFECTOS ADICIONALES ==========
  
  // Smooth scroll para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animación de entrada para las cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar todas las cards
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  console.log('🦸 AnimeLab cargado correctamente - Plus Ultra! 💪');
});
