const input = document.getElementById("number");
const form = document.forms[0];
const result = document.getElementById("result");
const app = document.querySelector(".app");
let arrayOfGuessedNumbers = [];
let counter = 0;
let arr = [45, 24, 67, 234, 132, 50, 32, 78, 75, 23, 124];
let randomIndex = Math.floor(Math.random() * arr.length);
let random = arr[randomIndex];
document.querySelector("#e").innerHTML = `The Number is Between :  ${
  random + randomIndex + 3
} ${random - randomIndex - 3}`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arrayOfGuessedNumbers.push({
    guessedNumber: input.value,
    randomNumber: random,
    answer: parseInt(input.value) === random,
  });
  counter++;
  if (counter > 10) {
    showTableAndResetButton();
  } else {
    if (input.value !== "" && input.value.length > 0) {
      let val = parseInt(input.value);
      if (val === random) {
        result.innerText = "You are correct";
        result.classList.add("correct");
        result.classList.remove("false");
        showTableAndResetButton();
      } else {
        result.classList.remove("correct");
        result.className = "false";
        result.innerText = "YOU ARE WRONG!";
      }

      input.value = "";
      input.focus();
    } else {
      alert("Please Enter a valid number !");
    }
  }
});

function showTableAndResetButton() {
  let tableContent = "<tbody>";
  arrayOfGuessedNumbers.forEach((guess, index) => {
    tableContent += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>[ Your choice = ${
                          guess.guessedNumber
                        } | Machine Choice = ${guess.randomNumber} ]</td>
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
    location.reload();
  });
}
