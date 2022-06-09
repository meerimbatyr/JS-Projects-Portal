let celsius = 25;
let degreeFahrenheit = (celsius * 9) / 5 + 32;
let fahrenheit = 100;
let degreeCelsius = ((fahrenheit - 32) * 5) / 9;

console.log(`${celsius}\u00B0C is ${degreeFahrenheit}\u00B0F`);
console.log(`${fahrenheit}\u00B0F is ${degreeCelsius}\u00B0C`);

//Challenge question
let fahrenheit1 = (Math.random() * 100).toFixed(0);
let degreeCelsius1 = (((fahrenheit - 32) * 5) / 9).toFixed(0);
console.log(
  `It is ${fahrenheit1}\u00B0F today.That's ${degreeCelsius1}\u00B0C`
);
