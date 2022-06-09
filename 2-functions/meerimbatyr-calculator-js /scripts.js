function squareNumber(number) {
  let squaredNumber = number * number;
  console.log(
    `The result of squaring the number ${number} is ${squaredNumber}`
  );
  return squaredNumber;
}

squareNumber(11);

function halfNumber(number) {
  let half = number / 2;
  console.log(`Half of ${number} is ${half}`);
  return half;
}

halfNumber(223);

function percentOf(num1, num2) {
  let percent = ((num1 / num2) * 100).toFixed(1);
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}

percentOf(5, 56);

function areaOfCircle(radius) {
  let area = (Math.PI * squareNumber(radius)).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
  return area;
}

areaOfCircle(7);

function operations(number) {
  let half = halfNumber(number);
  let square = squareNumber(half);
  let area = areaOfCircle(square);
  let result = percentOf(square, area);
}

operations(10);
