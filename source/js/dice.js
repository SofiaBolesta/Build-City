
export function rollDiceSix() {
  document.getElementById('rollButton').addEventListener('click', function () {
    const numSidesValue = document.getElementById("numSidesValue").textContent;
    const numSides = parseInt(numSidesValue);
    const roll1 = Math.floor(Math.random() * numSides) + 1;
    const roll2 = Math.floor(Math.random() * numSides) + 1;

    document.getElementById('dice1').textContent = roll1;
    document.getElementById('dice2').textContent = roll2;
  });
}
