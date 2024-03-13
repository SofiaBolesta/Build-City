const buttonMenuAboutUs = document.querySelector('.menu__link--about-us');
const buttonMenuOrder = document.querySelector('.menu__link--order');
const buttonMenuAboutUsFooter = document.querySelector('.footer__link--about-us');
const buttonMenuOrderFooter = document.querySelector('.footer__link--order');

const initMenuAboutGameScroll = () => {
  if (document.querySelector('.about-us')) {
    buttonMenuAboutUs.addEventListener('click', function () {
      document.querySelector('.about-us').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.order')) {
    buttonMenuOrder.addEventListener('click', function () {
      document.querySelector('.order').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.about-us')) {
    buttonMenuAboutUsFooter.addEventListener('click', function () {
      document.querySelector('.about-us').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.order')) {
    buttonMenuOrderFooter.addEventListener('click', function () {
      document.querySelector('.order').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {initMenuAboutGameScroll};
