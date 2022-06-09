//1. Create a function which returns number of even numbers from a given array of numbers

// const numberOfEvens = function (arr) {
//   let counter = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       counter++;
//     }
//   }
//   console.log(counter);
// };

// console.log(numberOfEvens([1, 2, 3, 4, 5, 6, 10, 14, 13, 1, 54, 16]));

function getEvenCount(arr) {
  return arr.filter((el) => el % 2 === 0).length;
}
console.log(getEvenCount([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//2.Create a function to find how many even numbers between given 2 numbers

function getEvens(num1, num2) {
  let count = 0;
  for (let i = num1; i < num2; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(getEvens(1, 25));

//3.Create a function to find the highest value in an array

// function highestValue(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(highestValue([1, 5, 145, 23, 689, 12]));

function highestValue(arr) {
  return Math.max(...arr);
}
console.log(highestValue([1, 5, 145, 23, 689, 12]));

//4.Create a function to find the lowest value in an array

function lowestValue(arr) {
  return Math.min(...arr);
}
console.log(lowestValue([1, 5, 145, 23, 689, 12]));

//5.Create a function to calculate sum all numbers from a given array

function sumOfAllNumbers(arr) {
  return arr.reduce((acc, el) => (acc += el), 0);
}
console.log(sumOfAllNumbers([1, 2, 3, 4, 5]));

//6.Create a function to calculate power of a number power(2, 3)

function powerOfNumber(num) {
  return Math.pow(num, 3);
}
console.log(powerOfNumber(2));

//7.Create a function to check if all values in an array are same types

// const arr = [1, 2, 3, false, 0];
// const sameType = (el) => typeof el === typeof arr[0];
// const checkType = arr.every(sameType);
// console.log(checkType);

function sameTypeCheck(arr) {
  const type = (el) => typeof el === typeof arr[0];
  return arr.every(type);
}

console.log(sameTypeCheck([1, 2, 3, null, 5]));

//8.Create a function to get the greatest common divisor (gcd) of two integers gcd(12, 8) // 4

function gcd(num1, num2) {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
}
console.log(gcd(12, -3));
console.log(gcd(8, 12));
