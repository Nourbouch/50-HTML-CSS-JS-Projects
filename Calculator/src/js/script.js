document.addEventListener("DOMContentLoaded", function () {
  const time = document.getElementById("time");
  setInterval(() => {
    time.textContent = new Date().toLocaleTimeString();
  });
  const display = document.querySelector(".calculator-display");
  const keys = document.querySelectorAll(".calculator-key");
  let currentInput = "";
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const keyId = key.dataset.id;
      handleKeyInput(keyId);
    });
  });
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    const keyId = getKeyIdFromKeyboardInput(key);
    if (keyId) {
      handleKeyInput(keyId);
      event.preventDefault();
    }
  });
  function handleKeyInput(keyId) {
    if (!isNaN(keyId) || keyId === "decimal-point") {
      if (keyId === "decimal-point" && !currentInput.includes(".")) {
        currentInput += ".";
      } else if (keyId !== "decimal-point") {
        currentInput += keyId;
      }
      updateDisplay();
    } else if (keyId === "clear") {
      clearDisplay();
    } else if (keyId === "equals") {
      calculate();
    } else if (keyId === "backspace") {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    } else {
      currentInput += keyId
        .replace("plus", "+")
        .replace("minus", "-")
        .replace("multiply", "*")
        .replace("divide", "/");
      updateDisplay();
    }
  }
  function getKeyIdFromKeyboardInput(key) {
    const keyMap = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      ".": "decimal-point",
      "+": "plus",
      "-": "minus",
      "*": "multiply",
      "/": "divide",
      Enter: "equals",
      Backspace: "backspace",
      Delete: "clear",
    };
    return keyMap[key];
  }
  function updateDisplay() {
    display.textContent = currentInput;
  }
  function clearDisplay() {
    currentInput = "";
    updateDisplay();
  }
  function calculate() {
    try {
      const result = eval(currentInput);
      display.textContent = result;
      currentInput = result.toString();
    } catch (error) {
      display.textContent = "Error";
    }
  }
});
