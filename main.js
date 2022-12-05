(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),c=n.n(o),i=n(667),s=n.n(i),d=new URL(n(92),n.b),l=c()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Caveat&display=swap);"]);var p=s()(d);l.push([e.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Caveat";\r\n  color: white\r\n}\r\n\r\nhtml {\r\n  background: url('+p+") no-repeat center center fixed;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n}\r\np {\r\n  text-align: center;\r\n  font-size: 4em;\r\n  font-weight: bold;\r\n}\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 2%;\r\n  width: fit-content;\r\n}\r\n.mascot {\r\n  width: 25%;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\nnav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\nbutton {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 2em;\r\n}\r\n.grid {\r\n  margin-top: 3%;\r\n  display: grid;\r\n  grid-template: auto auto/ auto auto;\r\n  grid-gap: 5%;\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\nspan {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: bold;\r\n}\r\n.gItem {\r\n  text-align: center;\r\n  width: 70%;\r\n}\r\n.patty {\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},92:(e,t,n)=>{e.exports=n.p+"289f6352fbafb05a6bd6.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"cf3f4d384cdedbc2fcfa.png",t=n.p+"dcfbc78bf9289fd681ae.png";function r(){const n=document.getElementById("content");n.replaceChildren();const r=document.createElement("div");r.classList.add("info");const a=new Image;a.src=e,a.classList.add("mascot"),n.appendChild(a),n.appendChild(r);const o=document.createElement("h1");o.textContent="Welcome to the Krusty Krab",r.appendChild(o);const c=document.createElement("p");c.textContent="The krusty krab is the only place in Bikini Bottom where you can eat the world famous, krabby patty!",r.appendChild(c);const i=new Image;i.src=t,i.classList.add("patty"),r.appendChild(i),document.querySelector("grid").replaceChildren(),n.replaceChildren()}const a=n.p+"f1e8c97f1a185a348c2a.png",o=n.p+"dbe862206e61d37b3d22.png",c=n.p+"6482c54d1aeee8642d57.png",i=n.p+"bbf195703aa3a864ab11.png",s=n.p+"2fc37c462b04ee7d36ec.png";var d=n(379),l=n.n(d),p=n(795),u=n.n(p),m=n(569),f=n.n(m),h=n(565),g=n.n(h),v=n(216),y=n.n(v),b=n(589),C=n.n(b),w=n(426),x={};x.styleTagTransform=C(),x.setAttributes=g(),x.insert=f().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=y(),l()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals,document.getElementById("home").addEventListener("click",r),document.getElementById("menu").addEventListener("click",(function(){const e=document.getElementById("content");e.replaceChildren();const n=document.createElement("div");n.classList.add("grid");const r=document.createElement("p"),s=new Image;s.classList.add("mascot"),s.src=a,e.appendChild(s);const d=document.createElement("div");d.classList.add("info"),e.appendChild(d),r.textContent="Try out the latest items we have to offer here at the krusty krab. Made fresh by the best fry cook in bikini bottom.",d.appendChild(r),d.appendChild(n);const l=document.createElement("div");l.classList.add("gItem");const p=document.createElement("div");p.classList.add("gItem");const u=document.createElement("div");u.classList.add("gItem");const m=document.createElement("div");m.classList.add("gItem");const f=new Image;f.src=o,n.appendChild(l),l.appendChild(f);const h=document.createElement("span");h.textContent="Rainbow Patty",l.appendChild(h);const g=new Image;g.src=c,n.appendChild(p),p.appendChild(g);const v=document.createElement("span");v.textContent="Nature Patty",p.appendChild(v);const y=new Image;y.src=i,n.appendChild(u),u.appendChild(y);const b=document.createElement("span");b.textContent="Nasty Patty",u.appendChild(b);const C=new Image;C.src=t,n.appendChild(m),m.appendChild(C);const w=document.createElement("span");w.textContent="Krabby Patty",m.appendChild(w)})),document.getElementById("contact").addEventListener("click",(function(){const e=document.getElementById("content");e.replaceChildren();const t=new Image;t.src=s,t.classList.add("mascot"),e.appendChild(t);const n=document.createElement("div");n.classList.add("info"),e.appendChild(n);const r=document.createElement("p");r.textContent="You can find us downtown in Bikini Bottom at 831 Bottom Feeder Lane. Right across the street from the Chum bucket",n.appendChild(r)})),r()})()})();