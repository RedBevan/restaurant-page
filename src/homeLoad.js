// The code below doesn't work
function homeLoad() {
  // Create element to add children to
  const element = document.createElement("div");
  element.setAttribute("id", "elementID");

  // Add page header text
  const headerText = document.createElement("h1");
  headerText.textContent = "El Gato Negro";
  element.appendChild(headerText);

  const homeHeader = document.createElement("h2");
  homeHeader.textContent = "The purr-suit of culinary happiness";
  element.appendChild(homeHeader);

  const paraOne = document.createElement("p");
  paraOne.textContent =
    "Paws for a while at El Gato Negro, and let us whisker up a treat for you and your feline friends.";
  element.appendChild(paraOne);

  const paraThree = document.createElement("p");
  paraThree.textContent =
    "Serving all of your cat's favourite dishes and with eminently scratchable furniture.";
  element.appendChild(paraThree);

  return element;
}

export default homeLoad;
