//Simple solution

/* let books = [
  {
    title: "Three Comrades",
    author: "Erich Maria Remarque",
    alreadyRead: true,
  },

  {
    title: "Martin Eden",
    author: "Jack London",
    alreadyRead: true,
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  const paragraph = document.createElement("p");
  const bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );

  paragraph.appendChild(bookDescription);
  document.body.appendChild(paragraph);
} */

//  Bonus solution

let books = [
  {
    title: "Three Comrades",
    author: "Erich Maria Remarque",
    alreadyRead: true,
    img: "https://onlinereadfreenovel.com/i2/erich-maria-remarque/three_comrades.jpg",
  },

  {
    title: "Martin Eden",
    author: "Jack London",
    alreadyRead: true,
    img: "https://kbimages1-a.akamaihd.net/e011c3bf-d4e3-4967-baa6-6762e07c0326/1200/1200/False/martin-eden-124.jpg",
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    alreadyRead: false,
    img: "https://images-na.ssl-images-amazon.com/images/I/513CiqMgOCL.jpg",
  },
];
const bookList = document.createElement("ul");

for (let i = 0; i < books.length; i++) {
  const bookInfo = document.createElement("li");
  const bookDescription = document.createTextNode(
    `${books[i].title} by ${books[i].author}`
  );

  bookInfo.appendChild(bookDescription);

  const bookImg = document.createElement("img");
  bookImg.src = books[i].img;

  bookInfo.appendChild(bookImg);

  if (books[i].alreadyRead === true) {
    bookInfo.style.color = "green";
  } else {
    bookInfo.style.color = "red";
  }
  bookList.appendChild(bookInfo);
}
document.body.appendChild(bookList);
