import bob from "./spongebob.png";
import rainbow from "./rainbow-patty.png";
import nature from "./nature-patty.png";
import nasty from "./nasty-patty.png";
import krabby from "./krabby-patty.png";

export function loadMenu() {
  const content = document.getElementById("content");
  const grid = document.createElement("div");
  grid.classList.add("grid");
  const para = document.createElement("p");
  const sponge = new Image();
  sponge.classList.add("mascot");
  sponge.src = bob;
  content.appendChild(sponge);
  para.textContent =
    "Try out the latest items we have to offer here at the krusty krab. Made fresh by the best fry cook in bikini bottom.";
  content.appendChild(para);

  document.body.appendChild(grid);
  const item1 = document.createElement("div");
  item1.classList.add('gItem')
  const item2 = document.createElement("div");
   item2.classList.add("gItem");
  const item3 = document.createElement("div");
   item3.classList.add("gItem");
  const item4 = document.createElement("div");
   item4.classList.add("gItem");
  const rain = new Image();
  rain.src = rainbow;
  grid.appendChild(item1);
  item1.appendChild(rain);
  const rTitle = document.createElement("span");
  rTitle.textContent = "Rainbow Patty";
  item1.appendChild(rTitle);
  const nat = new Image();
  nat.src = nature;
  grid.appendChild(item2);
  item2.appendChild(nat);
  const nTitle = document.createElement("span");
  nTitle.textContent = "Nature Patty";
  item2.appendChild(nTitle);
  const nast = new Image();
  nast.src = nasty;
  grid.appendChild(item3);
  item3.appendChild(nast);
  const aTitle = document.createElement("span");
  aTitle.textContent = "Nasty Patty";
  item3.appendChild(aTitle);
  const patty = new Image();
  patty.src = krabby;
  grid.appendChild(item4);
  item4.appendChild(patty);
  const kTitle = document.createElement("span");
  kTitle.textContent = "Krabby Patty";
  item4.appendChild(kTitle);
  //create grid item menu with title under image
}
