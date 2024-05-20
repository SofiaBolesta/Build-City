export function initializeCalculator() {
  const inputField = document.getElementById('inputField');
  const calculatorAllButtons = document.querySelectorAll('button');
  const generateButton = document.getElementById('generateButton');
  const rollButton = document.getElementById('rollButton');// Предположим, что у нас есть кнопка с идентификатором 'exceptButton'

  const buttons = Array.from(calculatorAllButtons).filter((button) => button !== generateButton && button !== rollButton);

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.textContent === '=') {
        if (inputField.value.trim() === '') {
          inputField.value = '';
        } else {
          /* eslint no-eval: 0 */
          let result = eval(inputField.value);
          if (isNaN(result) || !isFinite(result)) {
            inputField.value = 'Невозможно вычислить';
          } else {
            inputField.value = result;
          }
        }
      } else if (button.textContent === 'C') {
        inputField.value = '';
      } else if ((button.textContent === '+' || button.textContent === '-') && inputField.value.trim() === '') {
        // Если строка ввода пуста и пользователь пытается нажать "*", "/", "+", "-", ничего не делаем
      } else if (inputField.value === 'Невозможно вычислить' && /[0-9+-]/.test(button.textContent)) {
        // Если в строке ввода отображается "Невозможно вычислить" и пользователь нажимает цифру, "+", "-", очищаем строку ввода
        inputField.value = '';
        inputField.value += button.textContent;
      } else {
        inputField.value += button.textContent;
      }
    });
  });
}
