"use strict";
import get from "./module/getElements.js";
import getRandomUser from "./module/fetchUser.js";
import displayUser from "./module/displayUser.js";

const randomBtn = get(".btn");

const showUser = async () => {
  //get user from api
  const person = await getRandomUser();
  console.log(person);

  //display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
randomBtn.addEventListener("click", showUser);
