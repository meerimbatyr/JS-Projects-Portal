const billInput = document.querySelector("#bill");
const service = document.querySelector("#service");
const peopleInput = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btn = document.querySelector("#btn");
const total = document.querySelector(".total");

btn.addEventListener("click", function () {
  const selectedIndex = service.value;
  if (billInput.value === "" || peopleInput.value === "") {
    alert("Please enter values");
  } else if (selectedIndex === "0") {
    total.classList.remove("hidden");
    total.innerText = "Please Choose an Option";
  } else {
    //  console.log(typeof service);
    //  console.log(selectedIndex);
    const result = (
      Number((billInput.value / 100) * selectedIndex) / peopleInput.value
    ).toFixed(2);
    total.classList.remove("hidden");
    tip.innerText = "$" + result;
  }
});
