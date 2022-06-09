//get only the unique categories --Hardest one
//iterate over categories return buttons
//make sure to select buttons when they are available

//items
const menu = [
  {
    id: 1,
    name: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    name: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    name: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    name: "Oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    name: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    name: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  },
  {
    id: 9,
    name: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    name: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

///

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
     <article class="menu-item">
             <img
               class="item-info"
               src="${item.img}"
               alt="${item.name}"
             />
             <div class="item-info">
             <header>
               <h4>${item.name}</h4>
               <h4 class="price">${item.price}</h4>
             </header>
             <p class="item-text">${item.desc}
             </p>
             </div>
             
           </article>
     `;
    console.log(item);
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  console.log(displayMenu);
}

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      console.log(values);
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  console.log(categories);

  let categoryBtns = categories.map(function (category) {
    return `
      <button class="filter-btn" data-id="${category}" type="button">${category}</button>
      `;
  });
  categoryBtns = categoryBtns.join("");
  console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns;

  //delcare filter buttons after creating buttons
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  //all,breakfast,lunch,shakes
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      // console.log(e.currentTarget.dataset.id);
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(item.category);
        if (menuItem.category === category) {
          // console.log(menuItem);
          return menuItem;
        }
      });
      if (category === "all") {
        // console.log(menu);
        return displayMenuItems(menu);
      } else {
        return displayMenuItems(menuCategory);
      }
    });
  });
}
