// Import functions for buttons
import homeLoad from "./homeLoad";
import menuLoad from "./menuLoad";
import contactLoad from "./contactLoad";

function topLoad() {
  // Grab content div
  const content = document.querySelector("#content");

  // Add header div
  const globalHeaderDiv = document.createElement("div");
  globalHeaderDiv.setAttribute("id", "globalHeaderDiv");
  content.insertBefore(globalHeaderDiv, content.firstChild);

  // Add page header text
  const globalHeader = document.createElement("h1");
  globalHeader.textContent = "El Gato Negro";
  globalHeader.setAttribute("id", "globalHeader");
  globalHeaderDiv.appendChild(globalHeader);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id", "buttonDiv");
  content.appendChild(buttonDiv);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.setAttribute("id", "homeButton");
  buttonDiv.appendChild(homeButton);
  homeButton.addEventListener("click", function () {
    homeLoad();
  });

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.setAttribute("id", "menuButton");
  buttonDiv.appendChild(menuButton);
  menuButton.addEventListener("click", function () {
    menuLoad();
  });

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.setAttribute("id", "contactButton");
  buttonDiv.appendChild(contactButton);
  contactButton.addEventListener("click", function () {
    contactLoad();
  });

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "contentDiv");
  content.appendChild(contentDiv);

  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("id", "footerDiv");
  content.appendChild(footerDiv);

  const footerText = document.createElement("p");
  footerText.setAttribute("id", "footerText");
  footerText.textContent = "©RedBevan";
  footerDiv.appendChild(footerText);

  // Load home page on refresh
  homeLoad();

  return content;
}

export default topLoad;
