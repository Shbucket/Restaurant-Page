export  function loadHome() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  header.textContent = "Welcome to the Krusty Krab";
  content.appendChild(header);

  const para = document.createElement('p')
  para.textContent = 'The krusty krab is the only place in Bikini Bottom where you can eat the world famous, krabby patty!';
  content.appendChild(para)


}
