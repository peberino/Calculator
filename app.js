// Variables
let runningTotal = "0";
let previousOperator;

// Buttons
const result = document.querySelector("#result");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const division = document.querySelector("#division");
const equals = document.querySelector("#equal");
const multiplication = document.querySelector("#multiplication");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

zero.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "0";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "0";
  }
});

one.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "1";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "1";
  }
});

two.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "2";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "2";
  }
});

three.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "3";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "3";
  }
});

four.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "4";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "4";
  }
});

five.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "5";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "5";
  }
});

six.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "6";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "6";
  }
});

seven.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "7";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "7";
  }
});

eight.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "8";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "8";
  }
});

nine.addEventListener("click", () => {
  if (result.innerText === "0") {
    result.innerText = "9";
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + "9";
  }
});

clear.addEventListener("click", () => {
  result.innerText = "0";
  runningTotal = "0";
});

backspace.addEventListener("click", () => {
  if (result.innerText.length === 1) {
    result.innerText = "0";
  } else {
    result.innerText = result.innerText.slice(0, -1);
  }
});

// Operators
division.addEventListener("click", () => {
  runningTotal = result.innerText;
  previousOperator = "/";
  result.innerText = "0";
});

multiplication.addEventListener("click", () => {
  runningTotal = result.innerText;
  previousOperator = "*";
  result.innerText = "0";
});

minus.addEventListener("click", () => {
  runningTotal = result.innerText;
  previousOperator = "-";
  result.innerText = "0";
});

plus.addEventListener("click", () => {
  runningTotal = result.innerText;
  previousOperator = "+";
  result.innerText = "0";
});

equals.addEventListener("click", () => {
  runningTotal = `${runningTotal} ${previousOperator} ${result.innerText}`;
  result.innerText = eval(runningTotal);
  runningTotal = result.innerText;
});
