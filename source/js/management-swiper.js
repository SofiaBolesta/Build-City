import Swiper from '../js/vendor/swiper.js';
const managementSwiper = document.querySelector('.management__swiper');

export const initManagementSwiper = () => {
  if (managementSwiper) {
    (() =>
      new Swiper('.management__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
