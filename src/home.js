import krab from "./Mr.Krabs.png";
import patty from './krabby-patty.png'

export function loadHome() {
  const content = document.getElementById("content");
  const info = document.createElement('div')
  info.classList.add('info');

  const krabs = new Image();
  krabs.src = krab;
  krabs.classList.add("mascot");
  content.appendChild(krabs);

  content.appendChild(info)
  const header = document.createElement("h1");
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
