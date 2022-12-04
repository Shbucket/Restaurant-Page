import krab from "./Mr.Krabs.png";
import patty from './krabby-patty.png'

export function loadHome() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  const info = document.createElement('div')

  const krabs = new Image();
  krabs.src = krab;
  krabs.classList.add("Mr_Krabs");
  content.appendChild(krabs);

  content.appendChild(info)
  header.textContent = "Welcome to the Krusty Krab";
  info.appendChild(header);

  const para = document.createElement("p");
  para.textContent =
    "The krusty krab is the only place in Bikini Bottom where you can eat the world famous, krabby patty!";
 info.appendChild(para);

 const krabby = new Image();
 krabby.src = patty
 krabby.classList.add('patty')
 info.appendChild(krabby)

 
}
