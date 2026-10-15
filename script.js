/* ════════════════════════════════════════════════════
   NAVBAR: cambia de estilo al hacer scroll
   ════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // ejecuta al cargar por si ya está scrolleado

/* ════════════════════════════════════════════════════
   MENÚ MÓVIL
   ════════════════════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
  document.body.style.overflow = navMenu.classList.contains('is-open') ? 'hidden' : '';
});

navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

/* ════════════════════════════════════════════════════
   AÑO AUTOMÁTICO EN EL FOOTER
   ════════════════════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ════════════════════════════════════════════════════
   ANIMACIONES AL HACER SCROLL
   ════════════════════════════════════════════════════ */
const animateEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Retraso escalonado para efecto cascada
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animateEls.forEach(el => observer.observe(el));
} else {
  // Fallback para navegadores viejos
  animateEls.forEach(el => el.classList.add('is-visible'));
}