function menuLoad() {
  // Remove previously loaded page contents
  const element = document.querySelector("#elementID");
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }

  // Reload page header text
  const headerText = document.createElement("h1");
  headerText.textContent = "El Gato Negro";
  element.appendChild(headerText);

  // Add menu header
  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Menu";
  element.appendChild(menuHeader);

  const itemOne = document.createElement("p");
  itemOne.textContent = "Purr-mesan Chicken";
  element.appendChild(itemOne);

  const itemTwo = document.createElement("p");
  itemTwo.textContent = "Meow-ssaka";
  element.appendChild(itemTwo);

  const itemThree = document.createElement("p");
  itemThree.textContent = "Paw-sta Carbonara";
  element.appendChild(itemThree);

  const itemFour = document.createElement("p");
  itemFour.textContent = "Purritos";
  element.appendChild(itemFour);

  const itemSix = document.createElement("p");
  itemSix.textContent = "Meow-shroom Risotto";
  element.appendChild(itemSix);

  // Test it's working
  console.log("You wanna see the menu?!");

  return element;
}

export default menuLoad;
