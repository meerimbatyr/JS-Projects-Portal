let topColors = ["white", "lilac", "yellow", "pink"];
for (let i = 0; i < topColors.length; i++) {
  console.log(`My #${i + 1} choice is ${topColors[i]}`);
}

//Bonus solution
let topColors1 = ["white", "lilac", "yellow", "pink"];

function findLast(inputNum) {
  var string = String(inputNum);
  var lastDigit = string.slice(-1);
  return lastDigit;
}

// console.log(findLast(33))

for (let i = 0; i < topColors.length; i++) {
  var choiceNum = i + 1;
  var suffix = 0;
  var choiceNumLast = findLast(choiceNum);

  if (choiceNumLast === "1") {
    suffix = "st";
  } else if (choiceNumLast === "2") {
    suffix = "nd";
  } else if (choiceNumLast === "3") {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  console.log(`My ${choiceNum}${suffix} choice is ${topColors1[i]}`);
}
