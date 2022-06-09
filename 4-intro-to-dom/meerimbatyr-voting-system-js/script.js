const btns = document.querySelectorAll(".btn");
const vote = document.getElementsByName("span");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    count++;
    e.target.parentNode.lastElementChild.firstElementChild.innerText = count;

    // const teams = e.currentTarget.classList;
    // const barcelona = document.querySelector("#barcelona");
    // const juventus = document.querySelector("#juv");
    // const manchester = document.querySelector("#manch");
    // if (teams.contains("fcb")) {
    //   count++;
    //   barcelona.textContent = count;
    // } else if (teams.contains("juventus")) {
    //   count++;
    //   juventus.textContent = count;
    // } else {
    //   count++;
    //   manchester.textContent = count;
    // }
  });
});
