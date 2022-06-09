const bulb = document.querySelector("#bulb");

let bulbIsOn = false;
bulb.addEventListener("click", function () {
  if (bulbIsOn === false) {
    bulb.src =
      "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
    bulbIsOn = true;
  } else {
    bulb.src =
      "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
    bulbIsOn = false;
  }
});
