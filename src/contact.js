import squi from './squiward.png'

export function loadContact() {
  const content = document.getElementById("content");
  content.replaceChildren();

 const info = document.createElement("div");
 info.classList.add("info");
 content.appendChild(info);

 const squid = new Image();
 squid.src = squi ;
 squid.classList.add("mascot");
 content.appendChild(squid);
 

}
