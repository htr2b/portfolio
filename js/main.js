const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
      e.preventDefault();
    }
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 50 ? '0 0 16px #39ff14' : 'none';
});
