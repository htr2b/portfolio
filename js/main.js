document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      e.preventDefault();
    }
  });
});

const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section');
const observerOptions = { rootMargin: '-50% 0px -50% 0px' };

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link =>
        link.classList.toggle(
          link.getAttribute('href') === `#${entry.target.id}`
        )
      );
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

cards.forEach(card => cardObserver.observe(card));

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const STAR_COUNT = 150;
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.4 + 0.2,
    speed: Math.random() * 0.5 + 0.05
  }));
}

function renderStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#39ff14';
  stars.forEach(s => {
    ctx.globalAlpha = s.size / 2;
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(renderStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
requestAnimationFrame(renderStars);