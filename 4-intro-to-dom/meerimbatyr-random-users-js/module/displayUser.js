import get from "./getElements.js";

const image = get(".user-img");
const title = get(".user-title");
const name = get(".user-value");
const icons = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  image.src = person.image;
  title.textContent = `My name is `;
  name.textContent = person.name;

  icons.forEach((icon) => icon.classList.remove("active"));
  icons[0].classList.add("active");

  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const label = e.currentTarget.dataset.label;
      title.textContent = `My ${label} is`;
      name.textContent = person[label];
      icons.forEach((icon) => icon.classList.remove("active"));
      icon.classList.add("active");
    });
  });
};
export default displayUser;
