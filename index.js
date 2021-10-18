//Elements declaration
let initialPriceInput = document.getElementById("initial-bill");
let radios = document.getElementsByName("tipPercent");
let numberOfPeopleInput = document.getElementById("number-of-person");
let tipAmountElement = document.getElementById("tip-amount");
let totalAmountElement = document.getElementById("total-amount");
let calculateBtn = document.getElementById("submit");

//Number Value declaration
let initialPrice = 0;
let selectedPercent = 5;
let numberOfPeople = 0;
let tipAmount = 0;
let finalBill = 0;

//retrive initial price value
initialPriceInput.addEventListener("change", function () {
  initialPrice = initialPriceInput.value;
  calculateBtn.innerText = "CALCULATE";
});

//retrive selected tip percentage
radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    selectedPercent = radio.value;
    calculateBtn.innerText = "CALCULATE";
  });
});

//retrive Number Of People Value
numberOfPeopleInput.addEventListener("change", function () {
  numberOfPeople = numberOfPeopleInput.value;
  calculateBtn.innerText = "CALCULATE";
});

//function to calculate Tip and Total Amount
function calculateBill(initialPrice, tipPercent, numberOfPerson) {
  //logic of calculation
  tipAmount = ((initialPrice * tipPercent) / 100) * numberOfPerson;
  // finalBill = (initialPrice + tipAmount)
  finalBill = parseFloat(initialPrice, 2) + parseFloat(tipAmount, 2);
}

//function to set HTML Elements with true value
function setElementValue(tipAmount, finalBill) {
  tipAmountElement.innerText = "$" + tipAmount;
  totalAmountElement.innerText = "$" + finalBill;
}

//press enter to result - keyboard Events
document.addEventListener("keydown", (Event) => {
  const keyName = Event.key;

  if (keyName === "Enter") {
    calculateBill(initialPrice, selectedPercent, numberOfPeople);
    setElementValue(tipAmount, finalBill);
  }
});

//press button to result
calculateBtn.addEventListener("click", function () {
  calculateBill(initialPrice, selectedPercent, numberOfPeople);
  setElementValue(tipAmount, finalBill);
  toggleButton();
});

//function to toggle button from submit to reset
function toggleButton() {
  const btnText = calculateBtn.textContent;

  if (btnText === "RESET") {
    tipAmountElement.innerText = "$0.00";
    totalAmountElement.innerText = "$0.00";
    initialPriceInput.value = "";
    numberOfPeopleInput.value = "";
    radios[0].checked = true;
    calculateBtn.innerText = "CALCULATE";
  } else {
    calculateBtn.innerText = "RESET";
  }
}

// Remaining
//************ */
// 1. Validation
// 2.Custom Percentage
