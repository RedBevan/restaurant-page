function homeLoad() {
  const contentDiv = document.querySelector("#contentDiv");

  // Remove all child elements of contentDiv
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const homeHeader = document.createElement("h2");
  homeHeader.textContent = "The purr-suit of culinary happiness";

  const paraOne = document.createElement("p");
  paraOne.textContent =
    "Paws for a while at El Gato Negro, and let us whisker up a treat for you and your feline friends.";

  const paraTwo = document.createElement("p");
  paraTwo.textContent =
    "Serving all of your cat's favourite dishes and with eminently scratchable furniture.";

  contentDiv.appendChild(homeHeader);
  contentDiv.appendChild(paraOne);
  contentDiv.appendChild(paraTwo);

  return contentDiv;
}

export default homeLoad;
