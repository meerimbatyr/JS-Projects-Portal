const nickname = document.getElementById("nickname");
const favorites = document.getElementById("favorites");
const home = document.getElementById("hometown");

document.body.style.fontFamily = "Arial,sans-serif";
nickname.textContent = "Meka";
favorites.textContent = "coding";
home.textContent = "Balykchy,Kyrgyzstan";

const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].classList.add("listitem");
  document.querySelectorAll(".listitem")[i].style.color = "red";
}

const myImg = document.createElement("img");
myImg.src = "https://i.postimg.cc/v8XPdPhk/Meerim-Batyrkanova.jpg";

document.body.appendChild(myImg);
