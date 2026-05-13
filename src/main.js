import './style.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Navigation], // Пагінацію можна прибрати, якщо в HTML її немає
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.reviews-swiper .swiper-button-next-custom', // Прив'язка до конкретної секції
    prevEl: '.reviews-swiper .swiper-button-prev-custom',
  },
  breakpoints: {
    1440: {
      enabled: false,
    },
  },
});