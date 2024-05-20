const buttonTabsPreparation = document.querySelector('.management__link--preparation');

export const initTabsScrollPreparation = () => {
  if (document.querySelector('.management__swiper-slide--preparation')) {
    buttonTabsPreparation.addEventListener('click', function () {
      document.querySelector('.management__swiper-slide--preparation').scrollIntoView({behavior: 'smooth'});
    });
  }
};
