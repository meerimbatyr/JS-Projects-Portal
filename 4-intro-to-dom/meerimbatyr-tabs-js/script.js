"use strict";

const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //remove active class from buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide active content
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
