const time = document.getElementById("time");

setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
});
const numberKeys = [
  { value: "1", dataId: "1" },
  { value: "2", dataId: "2" },
  { value: "3", dataId: "3" },
  { value: "4", dataId: "4" },
  { value: "5", dataId: "5" },
  { value: "6", dataId: "6" },
  { value: "7", dataId: "7" },
  { value: "8", dataId: "8" },
  { value: "9", dataId: "9" },
  { value: "0", dataId: "0" },
  { value: ".", dataId: "decimal" },
  { value: ",", dataId: "comma" },
];
const operationKeys = [
  { icon: "fas fa-plus", dataId: "add" },
  { icon: "fas fa-minus", dataId: "subtract" },
  { icon: "fas fa-multiply", dataId: "multiply" },
  { icon: "fas fa-divide", dataId: "divide" },
  { icon: "fas fa-equals", dataId: "equals" },
  { icon: "fa-solid fa-c", dataId: "clear" },
  { icon: "fas fa-percent", dataId: "percent" },
  { icon: "fas fa-caret-down", dataId: "caret-down" },
  { icon: "fas fa-caret-up", dataId: "caret-up" },
  { icon: "fas fa-caret-left", dataId: "caret-left" },
  { icon: "fas fa-caret-right", dataId: "caret-right" },
];
let arrOfNums = [];
function handleClick(e) {
  const clickedElement = e.currentTarget;
  const dataId = clickedElement.getAttribute("data-id");
  const isNumber = numberKeys.some((key) => key.dataId === dataId);
  if (isNumber) {
    arrOfNums.push(dataId);
    console.log(arrOfNums);
  } else {
    const operation = operationKeys.find((key) => key.dataId === dataId);
    if (operation) {
      if (arrOfNums.length > 1) {
        const result = operate(arrOfNums);
        arrOfNums = [];
        time.innerHTML = result;
      }
    }
  }
}
document.querySelectorAll(".calculator-key").forEach((key) => {
  key.addEventListener("click", handleClick);
});
