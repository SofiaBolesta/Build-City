import {initTabs} from './init-tabs';
import {initManagementSwiper} from './management-swiper';
import {generateText} from './cardText';
import {initializeCalculator} from './calculate';
import {rollDiceSix} from './dice';
import {initMenuIndexScroll} from './initMenuIndexScroll';
import {initMenuAboutGameScroll} from './initMenuAboutGameScroll';
import {initTabsScrollBargaining} from './initTabsScrollBargaining';
import {initTabsScrollPreparation} from './initTabsScrollPreparation';
import {initTabsScrollCredit} from './initTabsScrollCredit';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  const calculatorElement = document.getElementById('calculator');
  if (calculatorElement) {
    generateText();
    initializeCalculator();
    rollDiceSix();
  }

  /*const calculatorElement = document.getElementById('calculator');
  if (calculatorElement) {
    generateText();
    initializeCalculator();
    rollDiceSix();
  }*/
  initManagementSwiper();
  initMenuIndexScroll();
  initMenuAboutGameScroll();
  initTabsScrollBargaining();
  initTabsScrollPreparation();
  initTabsScrollCredit();

  window.addEventListener('load', () => {
    initTabs();
  });
});

/* window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  // Проверяем, есть ли на странице элемент с id="calculator"
  const indexElement = document.getElementById('index');
  if (indexElement) {
    initManagementSwiper();
  }

  const gameSixElement = document.getElementById('gameSix');
  if (gameSixElement) {
    rollDiceSix();
  }

  const gameElement = document.getElementById('game');
  if (gameSixElement) {
    initializeCalculator();
    generateText();
  }

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const indexElement = document.getElementById('index');
    if (indexElement) {
      initTabs();
    }
  });
});*/
