const form = document.querySelector(".grocery-form");
const alertEl = document.querySelector(".alert");
const input = document.querySelector("#grocery");
const btnSubmit = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const btnClear = document.querySelector(".clear-btn");

//edit
let editElement;
let editFlag = false;

//add evvent listeners
form.addEventListener("submit", addItem);
btnClear.addEventListener("click", clearItems);

//function add item
function addItem(e) {
  e.preventDefault();
  if (input.value !== "" && editFlag === false) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    element.innerHTML = `
    <p class="title">${input.value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-pen-to-square"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `;
    //add event listeners to both buttons
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    //append child to list
    groceryList.appendChild(element);
    //display alert
    alertEl.textContent = "Item Added To The List";
    alertEl.classList.add("alert-success");
    //remove
    setTimeout(function () {
      alertEl.textContent = "";
      alertEl.classList.remove("alert-success");
    }, 1000);
    //show container
    container.classList.add("show-container");
    //local storage
    // addToLocalStorage(id.value);
    //set back to default
    setBackToDefault();
  } else if (input.value !== "" && editFlag === true) {
    editElement.innerHTML = input.value;
    alertEl.textContent = "Value Changed";
    alertEl.classList.add("alert-success");

    setTimeout(function () {
      alertEl.textContent = "";
      alertEl.classList.remove("alert-success");
    }, 1000);
    setBackToDefault();
  } else {
    alertEl.textContent = "Please Enter Value";
    alertEl.classList.add("alert-danger");

    //remove
    setTimeout(function () {
      alertEl.textContent = "";
      alertEl.classList.remove("alert-danger");
    }, 1000);
  }
  setBackToDefault();
}

//function delete item
function deleteItem(e) {
  //here i am targetting first the button and then to parent of parent element which is grocery-item
  const element = e.currentTarget.parentElement.parentElement;
  groceryList.removeChild(element);

  alertEl.textContent = "Item Removed";
  alertEl.classList.add("alert-danger");
  setBackToDefault();
  setTimeout(function () {
    alertEl.textContent = "";
    alertEl.classList.remove("alert-danger");
  }, 1000);
}

//function edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  editFlag = true;
  btnSubmit.textContent = "Edit";
}

//function clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  items.forEach((item) => {
    groceryList.removeChild(item);
  });
  container.classList.remove("show-container");
  setBackToDefault();
  //alert
  alertEl.textContent = "Empty List";
  alertEl.classList.add("alert-danger");

  //remove
  setTimeout(function () {
    alertEl.textContent = "";
    alertEl.classList.remove("alert-danger");
  }, 1000);
}

//set back to default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  btnSubmit.textContent = "Submit";
}

//addToLocalStorage
function addToLocalStorage(id, value) {}
