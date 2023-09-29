// Import functions for buttons
import homeLoad from "./homeLoad";
import menuLoad from "./menuLoad";
import contactLoad from "./contactLoad";

function topLoad() {
  // Grab content div
  const content = document.querySelector("#content");

  // // Create element to add children to
  // const element = document.createElement("div");
  // element.setAttribute("id", "elementID");
  // content.appendChild(element);

  // Add header div
  const globalHeaderDiv = document.createElement("div");
  content.insertBefore(globalHeaderDiv, content.firstChild);

  // Add page header text
  const globalHeader = document.createElement("h1");
  globalHeader.textContent = "El Gato Negro";
  globalHeader.setAttribute("id", "globalHeader");
  globalHeaderDiv.appendChild(globalHeader);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id", "buttonDiv");
  globalHeaderDiv.appendChild(buttonDiv);

  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "homeButton");
  buttonDiv.appendChild(homeButton);
  homeButton.addEventListener("click", function () {
    homeLoad();
  });

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menuButton");
  buttonDiv.appendChild(menuButton);
  menuButton.addEventListener("click", function () {
    menuLoad();
  });

  const contactButton = document.createElement("button");
  contactButton.setAttribute("id", "contactButton");
  buttonDiv.appendChild(contactButton);
  contactButton.addEventListener("click", function () {
    contactLoad();
  });

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "contentDiv");
  globalHeaderDiv.appendChild(contentDiv);

  console.log("test");

  return content;
}

export default topLoad;
