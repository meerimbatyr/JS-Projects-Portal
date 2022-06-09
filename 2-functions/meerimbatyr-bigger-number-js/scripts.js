function compareTwo(num1, num2) {
  if (num1 === num2) {
    return "Numbers ara equal";
  } else if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Numbers are incomparable";
  }
}

console.log(compareTwo(2, 2));
console.log(compareTwo(2, 6));
console.log(compareTwo(5, 1));
console.log(compareTwo(2, "mama"));
