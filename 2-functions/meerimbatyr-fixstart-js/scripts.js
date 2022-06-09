function fixStart(string) {
  let firstChar = string.charAt(0);
  return firstChar + string.slice(1).replace(new RegExp(firstChar, "g"), "*");
}

console.log(fixStart("babble"));
console.log(fixStart("turtle"));
