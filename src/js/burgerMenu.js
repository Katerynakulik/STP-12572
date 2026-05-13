const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const menuLinks = document.querySelectorAll('[data-menu-link]');

const closeMenu = () => {
  menu.removeAttribute('data-open');
  document.body.style.overflow = '';
};

openBtn.addEventListener('click', () => {
  menu.setAttribute('data-open', '');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.hasAttribute('data-open')) {
    closeMenu();
  }
});

menu.addEventListener('click', e => {
  if (e.target === menu) {
    closeMenu();
  }
});
