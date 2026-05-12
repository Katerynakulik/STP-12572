import './style.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Обробка скролу для хедера (фон)
const header = document.querySelector('#main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});
// Swiper
const swiper = new Swiper('.gallery-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  // Вимикаємо Swiper на десктопі
  breakpoints: {
    1440: {
      enabled: false,
    },
  },
});
