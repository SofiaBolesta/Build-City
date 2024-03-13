const buttonMenuRules = document.querySelector('.menu__link--rules');
const buttonMenuStartGame = document.querySelector('.menu__link--start-game');
const buttonMenuRulesFooter = document.querySelector('.footer__link--rules');
const buttonMenuStartGameFooter = document.querySelector('.footer__link--start-game');

const initMenuIndexScroll = () => {
  if (document.querySelector('.management')) {
    buttonMenuRules.addEventListener('click', function () {
      document.querySelector('.management').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.playing')) {
    buttonMenuStartGame.addEventListener('click', function () {
      document.querySelector('.playing').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.management')) {
    buttonMenuRulesFooter.addEventListener('click', function () {
      document.querySelector('.management').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.playing')) {
    buttonMenuStartGameFooter.addEventListener('click', function () {
      document.querySelector('.playing').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {initMenuIndexScroll};
