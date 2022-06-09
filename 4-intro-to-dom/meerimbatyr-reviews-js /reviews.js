const reviews = [
  {
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    name: "Peter Jones",
    job: "INTERN",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    name: "Bill Anderson",
    job: "THE BOSS",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const personImg = document.getElementById("person-img");
let currentItem = 0;

const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
const random = document.querySelector(".surprise");

const result = document.querySelector(".result");

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  const person = `<div class="img-container">
      <img src=${item.image} id="person-img"/>
      </div>
      <h4 id="author">${item.name}</h4>
      <p id="job">${item.job}</p>
      <p id="info">${item.info}</p>
`;
  result.innerHTML = person;

  //Other way of displaying the person info
  //   personImg.src = item.image;
  //   author.innerText = item.name;
  //   job.innerText = item.job;
  //   info.innerText = item.info;
}

next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson();
});

prev.addEventListener("click", function () {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

random.addEventListener("click", function () {
  const number = Math.floor(Math.random() * reviews.length);
  currentItem = number;
  showPerson();
});
