function menuLoad() {
  console.log("Hi there");
  const contentDiv = document.querySelector("#contentDiv");

  // Remove all child elements of contentDiv
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  // Add menu header
  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Tasting menu";
  contentDiv.appendChild(menuHeader);

  // Menu item factory
  const menuFactory = (item, description) => {
    const testFunction = () => console.log("New menu item!");
    const addToMenu = () => {
      let itemDiv = document.createElement("div");
      itemDiv.setAttribute("class", "menuItem");
      let menuTitle = document.createElement("p");
      menuTitle.setAttribute("class", "menuTitle");
      let menuDescription = document.createElement("p");
      menuDescription.setAttribute("class", "menuDescription");

      menuTitle.textContent = item;
      menuDescription.textContent = description;

      itemDiv.appendChild(menuTitle);
      itemDiv.appendChild(menuDescription);
      contentDiv.appendChild(itemDiv);
    };

    return { item, description, testFunction, addToMenu };
  };

  const itemOne = menuFactory(
    "Isle of Shamberg cod roe",
    "with sautéed seabeet and walnuts"
  );
  itemOne.testFunction();
  itemOne.addToMenu();

  const itemTwo = menuFactory(
    "Wood-smoked mackerel",
    "with horseradish relish"
  );
  itemTwo.addToMenu();

  const itemThree = menuFactory(
    "Beans on toast",
    "with Kentish broadbeans and sourdough crostini"
  );
  itemThree.addToMenu();

  const itemFour = menuFactory(
    "Hand-woven su filindeu pasta",
    "with seasonal pisto"
  );
  itemFour.addToMenu();

  const itemFive = menuFactory("Raspberry clafoutis", "with red berry compôte");
  itemFive.addToMenu();

  return contentDiv;
}

export default menuLoad;
