import * as ho from './home.js'
import * as me from './menu.js'
import * as co from './contact'
import "./style.css";
console.log("Hello This is coming from index.js");


const homeButton = document.getElementById('home')
homeButton.addEventListener('click',() => {
   ho.loadHome()
})
const menuButton = document.getElementById('menu')
menuButton.addEventListener('click', () => {
    me.loadMenu()
})
const contactButton = document.getElementById('contact')
contactButton.addEventListener('click', ()=> {
co.loadContact()
})

