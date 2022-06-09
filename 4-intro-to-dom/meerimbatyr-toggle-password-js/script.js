const input = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
