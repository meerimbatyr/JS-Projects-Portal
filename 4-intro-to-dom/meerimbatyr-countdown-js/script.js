"use strict";

//select elements
const timeWrapper = document.querySelector(".time-wrapper");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const stopTimer = document.getElementById("stop-btn");

//create elements for hours, minutes, seconds left
//set deadline first
const currentTime = new Date().getDate();
const deadline = new Date(`June ${currentTime + 1} 2022 00:00:00`);

function updateDOM() {
  const now = new Date();
  const missing = deadline - now;
  //   console.log(missing);
  hours.innerHTML = Math.floor((missing / 1000 / 60 / 60) % 24);
  minutes.innerHTML = Math.floor((missing / 1000 / 60) % 60);
  seconds.innerHTML = Math.floor((missing / 1000) % 60);
}

const interval = setInterval(() => updateDOM(), 1000);

stopTimer.addEventListener("click", function () {
  clearInterval(interval);
});
