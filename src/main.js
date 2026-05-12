import './style.css';

// Обробка скролу для хедера (фон)
const header = document.querySelector('#main-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
});
// Swiper
var swiper = new Swiper(".mySwiper", {
  // Налаштування пагінації (дробова: 1/5, 2/5...)
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // Навігація стрілками
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,      
  spaceBetween: 20,    
  breakpoints: {
    1440: {
      slidesPerView: 2,  
      spaceBetween: 44, 
    }
  }
});