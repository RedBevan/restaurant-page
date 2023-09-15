import "./style.css";
import sayHello from "./sayHello";
import RestaurantExterior from "./restaurant-exterior.jpg";
import homeLoad from "./homeLoad";
import menuLoad from "./menuLoad";

console.log(sayHello());

document.body.appendChild(homeLoad());

document.body.appendChild(menuLoad());
