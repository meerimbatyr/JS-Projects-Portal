const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const lengthOfWord = document.querySelector("#length");

btn.addEventListener("click", function () {
  const string = input.value.replace(/\s/g, "");
  lengthOfWord.innerText = string.length;
});
