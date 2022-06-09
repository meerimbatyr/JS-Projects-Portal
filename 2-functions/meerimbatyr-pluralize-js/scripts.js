function pluralize(number, word) {
  if (number === 1 || word === "sheep" || word === "geese") {
    return `${number} ${word}`;
  } else {
    return `${number} ${word}s`;
  }
}

console.log(pluralize(5, "cat"));
console.log(pluralize(1, "dog"));
console.log(pluralize(1, "sheep"));
console.log(pluralize(2, "geese"));
console.log(pluralize(0, "cat"));
