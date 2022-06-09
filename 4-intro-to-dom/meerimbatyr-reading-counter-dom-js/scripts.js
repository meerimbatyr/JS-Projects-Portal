/* Write a function that takes a certain type of tag and counts the number of elements with that tag. The function should return "There a X tags of type y on the page. */

function countTags(tagType) {
  const array = document.getElementsByTagName(tagType);
  console.log(array);
  return `There are ${array.length} tags of type ${tagType} on a page`;
}

const result = countTags("section");
console.log(result);
