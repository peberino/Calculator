// Variables
let runningTotal = "0";
let previousOperator;

// Buttons
const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".calcnum");
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

for (let num of numbers) {
  num.addEventListener("click", onNumberClick(Number(num.innerText)));
}

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
const prevOp = (operator) => () => {
  runningTotal = result.innerText;
  previousOperator = `${operator}`;
  result.innerText = "0";
};

division.addEventListener("click", prevOp(`/`));
multiplication.addEventListener("click", prevOp("*"));
minus.addEventListener("click", prevOp("-"));
plus.addEventListener("click", prevOp("+"));

equals.addEventListener("click", () => {
  runningTotal = `${runningTotal} ${previousOperator} ${result.innerText}`;
  result.innerText = eval(runningTotal);
  runningTotal = result.innerText;
});
