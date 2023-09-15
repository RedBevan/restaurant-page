function contactLoad() {
  // Remove previously loaded page contents
  const element = document.querySelector("#elementID");
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }

  // Reload page header text
  const headerText = document.createElement("h1");
  headerText.textContent = "El Gato Negro";
  element.appendChild(headerText);

  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact us";
  element.appendChild(contactHeader);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "0201 588 3328";
  element.appendChild(phoneNumber);

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "contact@elgatonegro.biz";
  element.appendChild(emailAddress);

  const addressLineOne = document.createElement("p");
  addressLineOne.textContent = "244 Highworth Street";
  element.appendChild(addressLineOne);

  const addressLineTwo = document.createElement("p");
  addressLineTwo.textContent = "Glasgow G1 3TD";
  element.appendChild(addressLineTwo);

  // Test it's working
  console.log("Contact us today!");

  return element;
}

export default contactLoad;
