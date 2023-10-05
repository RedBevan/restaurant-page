function homeLoad() {
  const contentDiv = document.querySelector("#contentDiv");

  // Remove all child elements of contentDiv
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const textDiv = document.createElement("div");
  textDiv.setAttribute("id", "textDiv");

  const homeHeader = document.createElement("h2");
  homeHeader.textContent = "An experience to savour.";

  const paraOne = document.createElement("p");
  paraOne.textContent =
    "El Gato Negro offers an elegant dining experience with natural, sustainable food from local producers. Our versatile approach to flavours has led us to create some truly standout dishes that you will love.";

  const paraTwo = document.createElement("p");
  paraTwo.textContent =
    "Since opening in 2019, our small team has won multiple awards including Best Tastes of Southern England, the UK Food Awards and the BBC Bites Award three times running.";

  textDiv.appendChild(homeHeader);
  textDiv.appendChild(paraOne);
  textDiv.appendChild(paraTwo);

  contentDiv.appendChild(textDiv);

  return contentDiv;
}

export default homeLoad;
