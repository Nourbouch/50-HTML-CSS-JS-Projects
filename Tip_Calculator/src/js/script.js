function tipCalculator(bill, percentTip, numOfPeople) {
  const tip = (bill * percentTip) / 100;
  const total = bill + tip;
  const totalPerPerson = total / numOfPeople;
  return {
    tip,
    total,
    totalPerPerson,
  };
}

window.addEventListener("DOMContentLoaded", () => {
  function calculateTip() {
    const billInput = document.getElementById("bill").value;
    const percentTipInput = document.getElementById("percent-tip").value;
    const numOfPeopleInput = document.getElementById("num-of-people").value;

    // Convert input values to numbers
    let bill = parseFloat(billInput);
    let percentTip = parseFloat(percentTipInput);
    let numOfPeople = parseFloat(numOfPeopleInput);

    // Check if any input is empty or not a number
    if (!bill || isNaN(bill)) {
      bill = 0; // Set default value or display error message
    }
    if (!percentTip || isNaN(percentTip)) {
      percentTip = 0; // Set default value or display error message
    }
    if (!numOfPeople || isNaN(numOfPeople)) {
      numOfPeople = 1; // Set default value or display error message
    }

    console.log("Bill:", bill);
    console.log("Percent Tip:", percentTip);
    console.log("Number of People:", numOfPeople);

    const { tip, total, totalPerPerson } = tipCalculator(
      bill,
      percentTip,
      numOfPeople
    );

    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("per_pers").innerText = (tip / numOfPeople).toFixed(
      2
    );
    document.getElementById("total_person").innerText =
      totalPerPerson.toFixed(2);
  }

  // Add event listeners to trigger calculateTip function when input values change
  document.getElementById("bill").addEventListener("input", calculateTip);
  document
    .getElementById("percent-tip")
    .addEventListener("input", calculateTip);
  document
    .getElementById("num-of-people")
    .addEventListener("input", calculateTip);

  // Initial calculation when the page loads
  calculateTip();
});
