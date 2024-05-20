const buttonTabsCredit = document.querySelector('.management__link--credit');

export const initTabsScrollCredit = () => {
  if (document.querySelector('.management__swiper-slide--credit')) {
    buttonTabsCredit.addEventListener('click', function () {
      document.querySelector('.management__swiper-slide--credit').scrollIntoView({behavior: 'smooth'});
    });
  }
};
