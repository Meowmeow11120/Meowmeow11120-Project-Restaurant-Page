(()=>{"use strict";function e(e){const t=document.querySelector("#content"),n=document.querySelector("#nav-bar");for(;t.lastChild!==n;)t.removeChild(t.lastChild)}function t(e){const t=document.getElementsByClassName("clicked");for(let e=0;e<t.length;e++)t[e].classList.remove("clicked");e.target.classList.add("clicked")}!function(){function e(e,t){const n=document.createElement("h1");return n.id=e,n.textContent=t,n}document.querySelector("#home"),document.querySelector("#about"),document.querySelector("#menu"),document.querySelector("#contact"),document.querySelector("#content").appendChild(function(){const t=document.createElement("div");t.id="nav-bar";const n=e("home","Home"),a=e("menu","Menu"),o=e("about","About"),s=e("contact","Contact");return t.append(n,a,o,s),t}())}(),home.addEventListener("click",(n=>{t(n),e()})),menu.addEventListener("click",(n=>{e(),t(n),function(){const e=document.querySelector("#content"),t=document.createElement("div");function n(e,n,a,o){const s=document.createElement("div"),i=document.createElement("div"),r=document.createElement("img"),c=document.createElement("h3"),d=document.createElement("h3"),u=document.createElement("span");return c.textContent=n,d.textContent=a,u.textContent=o,r.src=e,r.id="image",c.id="foodName",d.id="foodPrice",s.id="foodContainer",u.id="foodDescription",i.id="foodDetails",i.append(c,d,u),s.append(r,i),t.append(s),t}t.id="foodMenu";const a=n("https://sultanbadri.github.io/restaurant-page/images/hamburger.png","Hamburger","$2.49","Buns, patty, tomato, onions, lettuce, and our secret family recipe"),o=n("https://sultanbadri.github.io/restaurant-page/images/cheeseburger.png","Cheeseburger","$2.99","Buns, patty, tomato, onions, lettuce, and our secret family recipe,cheese"),s=n("https://sultanbadri.github.io/restaurant-page/images/double-cheeseburger.png","Double Cheese","$3.99","Buns, patty, tomato, onions, lettuce, and our secret family recipe, but with an extra patty and cheese."),i=n("https://sultanbadri.github.io/restaurant-page/images/steak.png","Steak","$11.99","A juicy steak made just"),r=n("https://sultanbadri.github.io/restaurant-page/images/ribs.png","BBQ Ribs","$8.99","Barbecue ribs with your choice of a add-ons."),c=n("https://sultanbadri.github.io/restaurant-page/images/caesar-salad.png","Caesar Salad","$4.99","Your typical caesar salad that comes with your choice of dressings."),d=n("https://sultanbadri.github.io/restaurant-page/images/grilled-cheese.png","Grilled Cheese Sandwich","$4.99","A toasted and grilled cheese sandwich, dipped in our special sauce."),u=n("https://sultanbadri.github.io/restaurant-page/images/french-fries.png","French Fries","$4.99","Sometimes you don't want to eat your burger alone, why not add some french fries?");e.append(a,o,s,i,r,c,d,u)}()})),contact.addEventListener("click",(n=>{e(),t(n),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="contactContainer",t.innerHTML="\n                  <h1> Phones</h1>\n                  <h1> $ Oz92-12j-2jda1</h1>\n                  <h1> # Oz92-34d-80c13</h1>\n                  <h1>  address</h1>\n                  <h1>  unknown regions</h1>",e.append(t)}()})),about.addEventListener("click",(n=>{e(),t(n),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="text";const n=document.createElement("p");n.classList.add("text"),n.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",t.append(n),e.append(t)}()}))})();