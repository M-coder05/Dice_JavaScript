function rollDice() {
  const numDice = parseInt(document.getElementById("numDice").value, 10) || 0;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice/${value}.png" alt="Dice ${value}" width="50">`);
  }
  diceResult.innerHTML = `You rolled: ${values.join(", ")}`;
  diceImage.innerHTML = images.join(" ");
}
