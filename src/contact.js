import squi from './squiward.png'

export function loadContact() {
  const content = document.getElementById("content");
  content.replaceChildren();

   const squid = new Image();
   squid.src = squi;
   squid.classList.add("mascot");
   content.appendChild(squid);

 const info = document.createElement("div");
 info.classList.add("info");
 content.appendChild(info);


 
 const para = document.createElement('p')
 para.textContent = 'You can find us downtown in Bikini Bottom at 831 Bottom Feeder Lane. Right across the street from the Chum bucket'
 info.appendChild(para)


}
