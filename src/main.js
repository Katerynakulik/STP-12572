import './style.css';

// Обробка скролу для хедера (фон)
const header = document.querySelector('#main-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
});
