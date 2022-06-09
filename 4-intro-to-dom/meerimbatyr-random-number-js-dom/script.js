const randomNumber = document.querySelector("#random-number");
const btnGenerate = document.querySelector("#generate");
const btnClear = document.querySelector("#clear");
const inputLowerLimit = document.querySelector("#lower-limit");
const inputUpperLimit = document.querySelector("#upper-limit");

btnGenerate.addEventListener("click", function () {
  const number =
    Math.floor(
      Math.random() * (inputUpperLimit.value - inputLowerLimit.value + 1)
    ) + Number(inputLowerLimit.value);
  randomNumber.innerText = number;
});

btnClear.addEventListener("click", function () {
  randomNumber.innerText = "";
  inputLowerLimit.value = "";
  inputUpperLimit.value = "";
});
