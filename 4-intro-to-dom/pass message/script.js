const btnSubmit = document.getElementById("btn-submit");
const input = document.querySelector("#input");
const message = document.querySelector("#text");
const msgPrompt = document.querySelector("#prompt-msg");

btnSubmit.addEventListener("click", function () {
  if (input.value === "") {
    msgPrompt.classList.remove("hidden");
    setTimeout(() => {
      msgPrompt.classList.add("hidden");
    }, 3000);
  } else {
    message.innerText = input.value;
    input.value = "";
  }
});
