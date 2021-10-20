//Elements declaration
let initialPriceInput = document.getElementById("initial-bill");
let radios = document.getElementsByName("tipPercent");
let numberOfPeopleInput = document.getElementById("number-of-person");
let tipAmountElement = document.getElementById("tip-amount");
let totalAmountElement = document.getElementById("total-amount");
let calculateBtn = document.getElementById("submit");

//Number Value declaration
let initialPrice = "";
let selectedPercent = 5;
let numberOfPeople = "";
let tipAmount = 0;
let finalBill = 0;
var validationFlag = "1";

//retrive initial price value
initialPriceInput.addEventListener(
  "change",
  function () {
    initialPrice = this.value;
    calculateBtn.innerText = "CALCULATE";
    document.querySelector(".bill-input").style.borderColor =
      "hsl(172, 67%, 45%)";
    document.querySelector(".price-error-msg").style.display = "none";
  },
  true
);
initialPriceInput.addEventListener(
  "blur",
  function () {
    if (initialPrice == "" || initialPrice == 0) {
      initialPriceInput.focus();
      this.value = "";
      document.querySelector(".bill-input").style.borderColor =
        "hsl(0,100%,50%)";
      document.querySelector(".price-error-msg").style.display = "inline-block";
    }
  },
  true
);

//retrive selected tip percentage
radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    selectedPercent = radio.value;

    calculateBtn.innerText = "CALCULATE";
  });
});

//retrive Number Of People Value
numberOfPeopleInput.addEventListener(
  "change",
  function () {
    numberOfPeople = this.value;
    calculateBtn.innerText = "CALCULATE";
    document.querySelector(".number-of-people").style.borderColor =
      "hsl(172, 67%, 45%)";
    document.querySelector(".people-error-msg").style.display = "none";
  },
  true
);
numberOfPeopleInput.addEventListener(
  "blur",
  function () {
    if (numberOfPeople == "" || numberOfPeople == 0) {
      this.focus();
      this.value = " ";
      document.querySelector(".number-of-people").style.borderColor =
        "hsl(0,100%,50%)";
      document.querySelector(".people-error-msg").style.display =
        "inline-block";
    }
  },
  true
);

//function to calculate Tip and Total Amount
function calculateBill(initialPrice, tipPercent, numberOfPerson) {
  //logic of calculation
  tipAmount = ((initialPrice * tipPercent) / 100) * numberOfPerson;
  // finalBill = (initialPrice + tipAmount)
  finalBill = parseFloat(initialPrice, 2) + parseFloat(tipAmount, 2);
}

//function to set HTML Elements with true value
function setElementValue(tipAmount, finalBill) {
  tipAmountElement.innerText = "$" + tipAmount.toFixed(2);
  totalAmountElement.innerText = "$" + finalBill.toFixed(2);
}

//press enter to result - keyboard Events
document.addEventListener("keydown", (Event) => {
  const keyName = Event.key;

  if (keyName === "Enter") {
      calculateBill(initialPrice, selectedPercent, numberOfPeople);
      setElementValue(tipAmount, finalBill);
      toggleButton();  
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
    initialPrice = 0;
    selectedPercent = 5;
    numberOfPeople = 0;
    calculateBtn.innerText = "CALCULATE";
  } else {
    calculateBtn.innerText = "RESET";
  }
}

// //function for validation
// function validation(initialPrice,numberOfPeople) {
//   if(initialPrice === 0 )
//   {
//     validationFlag = 1;
//   }
//   else if(numberOfPeople === 0)
//   {
//     validationFlag = 2;
//   }
//   return validationFlag;
// }

/*VALIDATION RULES
1. Initial bill should be non zero
2. Number of People should be non zero
*/

// Remaining
//************ */
// 1. Validation
// 2.Custom Percentage
