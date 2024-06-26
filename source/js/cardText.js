import {cardArray} from './card-array';
export function generateText() {
  const button = document.getElementById('generateButton');
  const textContainer = document.getElementById('textContainer');

// Очистка контейнера при загрузке страницы
  /*textContainer.innerHTML = '';*/

// Добавляем обработчик события click
  button.addEventListener('click', generateText);

  const texts = cardArray;

  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];

  // Создаем новый элемент для текста
  const newText = document.createTextNode(randomText);

  // Очищаем контейнер перед добавлением нового текста
  textContainer.innerHTML = '';

  // Добавляем новый текст в контейнер
  textContainer.appendChild(newText);
}
