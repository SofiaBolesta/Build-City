const buttonTabsBargaining = document.querySelector('.management__link--bargaining');

const initTabsScrollBargaining = () => {
  if (document.querySelector('.management__swiper-slide--bargaining')) {
    buttonTabsBargaining.addEventListener('click', function () {
      document.querySelector('.management__swiper-slide--bargaining').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {initTabsScrollBargaining};
