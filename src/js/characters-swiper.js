import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

let charactersSwiper = null;

function initCharactersSwiper() {
  if (window.innerWidth < 1440) {
    if (!charactersSwiper) {
      charactersSwiper = new Swiper('[data-characters-swiper]', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '[data-characters-swiper] [data-characters-next]',
          prevEl: '[data-characters-swiper] [data-characters-prev]',
        },
      });
    }
  } else {
    if (charactersSwiper) {
      charactersSwiper.destroy(true, true);
      charactersSwiper = null;
    }
  }
}

initCharactersSwiper();
window.addEventListener('resize', initCharactersSwiper);
