const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * colors.length);
  //   console.log(randomColor);
  color.textContent = colors[randomColor];
  document.body.style.backgroundColor = colors[randomColor];
});
