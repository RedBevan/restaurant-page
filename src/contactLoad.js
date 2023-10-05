function contactLoad() {
  const contentDiv = document.querySelector("#contentDiv");

  // Remove all child elements of contentDiv
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact us";
  contentDiv.appendChild(contactHeader);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "0201 588 3328";
  contentDiv.appendChild(phoneNumber);

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "contact@elgatonegro.co.uk";
  contentDiv.appendChild(emailAddress);

  const addressLineOne = document.createElement("p");
  addressLineOne.textContent = "244 Highworth Street";
  contentDiv.appendChild(addressLineOne);

  const addressLineTwo = document.createElement("p");
  addressLineTwo.textContent = "Burling-on-Roy";
  contentDiv.appendChild(addressLineTwo);

  return contentDiv;
}

export default contactLoad;
