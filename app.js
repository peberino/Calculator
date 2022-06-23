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

const onNumberClick = (num) => () => {
  if (result.innerText === "0") {
    result.innerText = `${num}`;
  } else if (result.innerText.length >= 10) {
    result.innerText = result.innerText;
  } else {
    result.innerText = result.innerText + `${num}`;
  }
};

zero.addEventListener("click", onNumberClick(0));
one.addEventListener("click", onNumberClick(1));
two.addEventListener("click", onNumberClick(2));
three.addEventListener("click", onNumberClick(3));
four.addEventListener("click", onNumberClick(4));
five.addEventListener("click", onNumberClick(5));
six.addEventListener("click", onNumberClick(6));
seven.addEventListener("click", onNumberClick(7));
eight.addEventListener("click", onNumberClick(8));
nine.addEventListener("click", onNumberClick(9));

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
const prevOp = (operator) => {
  runningTotal = result.innerText;
  previousOperator = `${operator}`;
  result.innerText = "0";
};

division.addEventListener("click", () => {
  prevOp(`/`);
});

multiplication.addEventListener("click", () => {
  prevOp("*");
});

minus.addEventListener("click", () => {
  prevOp("-");
});

plus.addEventListener("click", () => {
  prevOp("+");
});

equals.addEventListener("click", () => {
  runningTotal = `${runningTotal} ${previousOperator} ${result.innerText}`;
  result.innerText = eval(runningTotal);
  runningTotal = result.innerText;
});
