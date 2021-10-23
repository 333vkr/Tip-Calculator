//Elements declaration
let initialPriceInput = document.getElementById("initial-bill");
let radios = document.getElementsByName("tipPercent");
let numberOfPeopleInput = document.getElementById("number-of-person");
let tipAmountElement = document.getElementById("tip-amount");
let totalAmountElement = document.getElementById("total-amount");
let calculateBtn = document.getElementById("submit");
let numberOfPeopleLabelElement = document.getElementById("label-of-people");
let initialpriceLabelElement = document.getElementById("label-bill");

//Number Value declaration
let initialPrice = "";
let selectedPercent = 5;
let numberOfPeople = "";
let tipAmount = 0;
let finalBill = 0;
var validationFlag = "1";

document.addEventListener(
  "load",
  function (e) {
    calculateBtn.disabled = true;
    calculateBtn.classList.add("no-hover");
  },
  true
);

//retrive initial price value v2.0
initialPriceInput.addEventListener(
  "input",
  function (e) {
    initialPrice = e.target.value;
    initialPriceValidation(initialPrice);
    calculateBtn.innerText = "CALCULATE";
  },
  true
);
//thrown error wheen price input leaves empty or 0.
initialPriceInput.addEventListener(
  "blur",
  function (e) {
    initialPriceValidation(initialPrice);
  },
  true
);

//retrive selected tip percentage
radios.forEach((radio) => {
  radio.addEventListener("click", function (e) {
    selectedPercent = e.target.value;
    if (e.target.id == "custom") {
      radio.setAttribute("type", "number");
      radio.classList.add("custom-percent");
      radio.value = "";
      radio.placeholder = 0;
      document.querySelector("#custom-label").style.display = "none";
      radio.addEventListener(
        "input",
        function (e) {
          selectedPercent = e.target.value;
          if (selectedPercent == 0 || selectedPercent == "") {
            radio.classList.add("custom-percent-error");
          } else {
            radio.classList.remove("custom-percent-error");
          }
        },
        true
      );
    } else {
     resetRadio();
     e.target.checked = true;
    }
    calculateBtn.innerText = "CALCULATE";
  });
});

//retrive Number of People Value v2.0
numberOfPeopleInput.addEventListener(
  "input",
  function (e) {
    numberOfPeople = e.target.value;
    numberOfPeopleValidate(numberOfPeople);
    calculateBtn.innerText = "CALCULATE";
  },
  true
);
//throws an error when people input leaves empty or 0.
numberOfPeopleInput.addEventListener(
  "blur",
  function (e) {
    numberOfPeopleValidate(numberOfPeople);
  },
  true
);

//press enter to result - keyboard Events
document.addEventListener("keydown", (Event) => {
  const keyName = Event.key;

  if (keyName === "Enter") {
    if (initialPrice == "" || numberOfPeople == "" || selectedPercent == 0) {
      emptyInputValidation();
    } else {
      calculateBill(initialPrice, selectedPercent, numberOfPeople);
      setElementValue(tipAmount, finalBill);
      toggleButton();
    }
  }
});

//press button to result
calculateBtn.addEventListener("click", function () {
  if (initialPrice == "" || numberOfPeople == "" || selectedPercent == 0) {
    emptyInputValidation();
  } else {
    calculateBill(initialPrice, selectedPercent, numberOfPeople);
    setElementValue(tipAmount, finalBill);
    toggleButton();
  }
});




//*****************FUNCTION SECTION***********************//

// Funtion to validate intial input
function initialPriceValidation(initialPrice) {
  if (initialPrice == "" || initialPrice == 0) {
    initialPriceInput.focus();
    initialPriceInput.value = "";
    initialpriceLabelElement.style.fontSize = "0.8rem";
    document.querySelector(".bill-input").style.borderColor = "hsl(0,100%,50%)";
    document.querySelector(".price-error-msg").style.display = "inline-block";
    calculateBtn.disabled = true;
    calculateBtn.classList.add("no-hover");
  } else {
    initialpriceLabelElement.style.fontSize = "1rem";
    document.querySelector(".bill-input").style.borderColor =
      "hsl(172, 67%, 45%)";
    document.querySelector(".price-error-msg").style.display = "none";
    calculateBtn.disabled = false;
    calculateBtn.classList.remove("no-hover");
  }
}

//Funtion to validate Number of people
function numberOfPeopleValidate(numberOfPeople) {
  if (numberOfPeople == " " || numberOfPeople == 0) {
    numberOfPeopleInput.focus();
    numberOfPeopleInput.value = " ";
    numberOfPeopleLabelElement.style.fontSize = "0.8rem";
    document.querySelector(".number-of-people").style.borderColor =
      "hsl(0,100%,50%)";
    document.querySelector(".people-error-msg").style.display = "inline-block";
    calculateBtn.disabled = true;
    calculateBtn.classList.add("no-hover");
  } else {
    numberOfPeopleLabelElement.style.fontSize = "1rem";
    document.querySelector(".number-of-people").style.borderColor =
      "hsl(172, 67%, 45%)";
    document.querySelector(".people-error-msg").style.display = "none";
    calculateBtn.disabled = false;
    calculateBtn.classList.remove("no-hover");
  }
}

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
    resetRadio();
    radios[0].checked = true;
    calculateBtn.innerText = "CALCULATE";
  } else {
    calculateBtn.innerText = "RESET";
  }
}

//reset radio
function resetRadio() {
  radios[5].setAttribute("type", "radio");
  radios[5].classList.remove("percent-item");
  radios[5].classList.remove("custom-percent");
  radios[5].classList.remove("custom-percent-error");
  document.querySelector("#custom-label").style.display = "block";
}

//validate input values are valid or not while pressing calculate button or press enter
function emptyInputValidation() {
  if (initialPrice == "") {
    initialPriceInput.focus();
    initialpriceLabelElement.style.fontSize = "0.8rem";
    document.querySelector(".bill-input").style.borderColor = "hsl(0,100%,50%)";
    document.querySelector(".price-error-msg").style.display = "inline-block";
  } else if (numberOfPeople == "") {
    numberOfPeopleInput.focus();
    numberOfPeopleLabelElement.style.fontSize = "0.8rem";
    document.querySelector(".number-of-people").style.borderColor =
      "hsl(0,100%,50%)";
    document.querySelector(".people-error-msg").style.display = "inline-block";
  } else if (selectedPercent == 0) {
    radios[5].classList.add("custom-percent-error");
    radios[5].focus();
  } else {
    document.querySelector(".bill-input").style.borderColor = "hsl(0,100%,50%)";
    document.querySelector(".price-error-msg").style.display = "inline-block";
    document.querySelector(".number-of-people").style.borderColor =
      "hsl(0,100%,50%)";
    document.querySelector(".people-error-msg").style.display = "inline-block";
  }
}



