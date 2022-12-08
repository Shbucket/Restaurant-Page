import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact";
import "./style.css";

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", loadHome )
const menuButton = document.getElementById("menu");
menuButton.addEventListener("click",loadMenu)
const contactButton = document.getElementById("contact");
contactButton.addEventListener("click",loadContact)


loadHome();

