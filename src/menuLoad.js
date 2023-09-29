function menuLoad() {
  const contentDiv = document.querySelector("#contentDiv");

  // Remove all child elements of contentDiv
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  // Add menu header
  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Menu";
  contentDiv.appendChild(menuHeader);

  const itemOne = document.createElement("p");
  itemOne.textContent = "Purr-mesan Chicken";
  contentDiv.appendChild(itemOne);

  const itemTwo = document.createElement("p");
  itemTwo.textContent = "Meow-ssaka";
  contentDiv.appendChild(itemTwo);

  const itemThree = document.createElement("p");
  itemThree.textContent = "Paw-sta Carbonara";
  contentDiv.appendChild(itemThree);

  const itemFour = document.createElement("p");
  itemFour.textContent = "Purritos";
  contentDiv.appendChild(itemFour);

  const itemSix = document.createElement("p");
  itemSix.textContent = "Meow-shroom Risotto";
  contentDiv.appendChild(itemSix);

  return contentDiv;
}

export default menuLoad;
