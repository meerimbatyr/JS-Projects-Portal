let books = [
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
  let book = books[i];
  let bookInfo = book.title + " by " + book.author;
  console.log(bookInfo);
  if (book.alreadyRead === true) {
    console.log(`You already read ${bookInfo}`);
  } else {
    console.log(`You still need to read ${bookInfo}`);
  }
}
