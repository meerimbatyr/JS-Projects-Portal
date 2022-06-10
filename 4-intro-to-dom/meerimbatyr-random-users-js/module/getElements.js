function getElements(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("Element is not selected");
}

export default getElements;
