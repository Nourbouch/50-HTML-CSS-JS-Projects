const input = document.getElementById("number");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const app = document.querySelector('.app');
let arrayOfGuessedNumbers = [];
let counter = 0;
let randomDn = Math.floor(Math.random() * 10);
let randomForRandom = Math.floor(Math.random() * 25);
let random = Math.floor(Math.random() * randomForRandom);

document.querySelector('#e').innerHTML = `The Machine Choice is between 0 and ${randomForRandom}: ${random - randomDn}`;

btn.addEventListener("click", () => {
  counter++;
  if (counter > 10) {
    showTableAndResetButton()
  }
  if (input.value !== '' && input.value.length > 0) {
    let val = parseInt(input.value);

    if (!isNaN(val)) {
      result.innerText = "no";
    }

    if (val === random) {
      result.innerText = "You are correct";
      result.classList.add("correct");
      result.classList.remove("false");
      arrayOfGuessedNumbers.push({
        guessedNumber: val,
        randomNumber: random,
        answer: true
      });
      showTableAndResetButton();
    } else {
      let obj = {
        guessedNumber: val,
        randomNumber: random,
        answer: false,
      };
      arrayOfGuessedNumbers.push(obj);
      result.classList.remove("correct");
      result.className = "false";
      result.innerText = "YOU ARE WRONG!";
      input.value = '';
      input.focus();
    }
  } else {
    alert('Please Enter a valid number !');
  }
});

function showTableAndResetButton() {
  let tableContent = "<tbody>";
  arrayOfGuessedNumbers.forEach((guess, index) => {
    tableContent += `
      <tr>
        <td>${index + 1}</td>
        <td>[ Your choice = ${guess.guessedNumber} - Machine Choice ${guess.randomNumber} ]</td>
        <td>${guess.answer ? "True" : "False"}</td>
      </tr>
    `;
  });

  tableContent += "</tbody>";
  app.innerHTML = `
    <h1>Table of Results</h1>
    <table border='1'>
      <thead>
        <tr>
          <th>Guess Tries</th>
          <th>Guessed Number | Machine Number </th>
          <th>Result</th>
        </tr>
      </thead>
      ${tableContent}
    </table>
    <button id="restartBtn">Play Again</button>
  `;

  document.getElementById("restartBtn").addEventListener("click", () => {
    // Reset the game
    arrayOfGuessedNumbers = [];
    counter = 0;
    randomDn = Math.floor(Math.random() * 10);
    randomForRandom = Math.floor(Math.random() * 25);
    random = Math.floor(Math.random() * randomForRandom);
    document.querySelector('#e').innerHTML = `The Machine Choice is between 0 and ${randomForRandom}: ${random - randomDn}`;
    app.innerHTML = ''; // Clear the table and button
    result.innerText = '';
  });
}

